import React, { useEffect, useRef, useState } from 'react'

const FRAME_MS = 64 // 200 frames over a 12.8 s turn
const DRAG_START_PX = 4 // sideways travel before a press counts as a drag

interface TurntableProps {
  /** Folder holding the frames, e.g. "/turntable/" (000.webp … N-1.webp) */
  base?: string
  count?: number
  ext?: string
  width?: number
  height?: number
  alt: string
  className?: string
  /** Called once with true when every frame is loaded and dragging works */
  onReady?: () => void
}

/**
 * Plays an image sequence on a canvas as a looping turn, and lets the
 * viewer drag sideways to rotate it once every frame has loaded.
 * Until frame 0 is in, the still image is shown in its place.
 */
export const Turntable: React.FC<TurntableProps> = ({
  base = '/turntable/',
  count = 200,
  ext = '.webp',
  width = 1200,
  height = 574,
  alt,
  className = '',
  onReady,
}) => {
  const figureRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const onReadyRef = useRef(onReady)
  onReadyRef.current = onReady
  const [live, setLive] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const figure = figureRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!figure || !canvas || !context) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const frames: HTMLImageElement[] = []
    const failed = new Set<number>()
    let pending = count
    let isLive = false
    let frame = 0
    let onScreen = false
    let raf = 0
    let last = 0
    let cancelled = false
    let press: { id: number; x: number; frame: number; width: number; dragging: boolean } | null = null

    const wrap = (index: number) => ((index % count) + count) % count

    const draw = (index: number) => {
      const image = frames[index]
      if (!image || !image.complete || !image.naturalWidth) return false
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      frame = index
      return true
    }

    // Draw `index`, or the nearest loaded frame in the `step` direction.
    const show = (index: number, step: number) => {
      for (let tries = 0; tries < count; tries++) {
        if (draw(wrap(index + tries * step))) return true
      }
      return false
    }

    const advance = () => {
      let next = wrap(frame + 1)
      for (let tries = 0; tries < count && failed.has(next); tries++) next = wrap(next + 1)
      return draw(next)
    }

    const tick = (now: number) => {
      raf = 0
      if (!onScreen || press?.dragging) return
      if (now - last > 5 * FRAME_MS) last = now - FRAME_MS
      if (now - last >= FRAME_MS && advance()) last += FRAME_MS
      raf = window.requestAnimationFrame(tick)
    }

    const play = () => {
      if (raf || reduced || !isLive || !onScreen || press?.dragging) return
      last = window.performance.now()
      raf = window.requestAnimationFrame(tick)
    }

    const settle = (index: number, ok: boolean) => {
      if (cancelled) return
      if (!ok) failed.add(index)
      pending -= 1
      if (!isLive && ((index === 0 && ok) || !pending) && show(0, 1)) {
        isLive = true
        setLive(true)
        play()
      }
      if (isLive && !pending) {
        setReady(true)
        onReadyRef.current?.()
      }
    }

    const load = () => {
      if (frames.length) return
      for (let index = 0; index < count; index++) {
        const image = new Image()
        image.onload = () => settle(index, true)
        image.onerror = () => settle(index, false)
        image.src = base + String(index).padStart(3, '0') + ext
        frames.push(image)
      }
    }

    // Start fetching when the figure is within a screen of the viewport;
    // play only while it is actually on screen.
    const loadObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        loadObserver.disconnect()
        load()
      },
      { rootMargin: '100% 0px' },
    )
    loadObserver.observe(figure)

    const playObserver = new IntersectionObserver((entries) => {
      onScreen = entries[entries.length - 1].isIntersecting
      play()
    })
    playObserver.observe(figure)

    const onDown = (event: PointerEvent) => {
      if (pending || press || (event.pointerType === 'mouse' && event.button !== 0)) return
      press = { id: event.pointerId, x: event.clientX, frame, width: 1, dragging: false }
      if (event.pointerType === 'mouse') event.preventDefault()
    }

    const onMove = (event: PointerEvent) => {
      if (!press || event.pointerId !== press.id) return
      if (!press.dragging) {
        if (Math.abs(event.clientX - press.x) < DRAG_START_PX) return
        press.dragging = true
        press.x = event.clientX
        press.frame = frame
        press.width = figure.getBoundingClientRect().width || 1
        figure.setPointerCapture(press.id)
      }
      // A full turn per figure width, the near face following the pointer.
      const turned = Math.round(((press.x - event.clientX) / press.width) * count)
      show(press.frame + turned, event.clientX > press.x ? -1 : 1)
    }

    const onRelease = (event: PointerEvent) => {
      if (!press || event.pointerId !== press.id) return
      press = null
      play()
    }

    figure.addEventListener('pointerdown', onDown)
    figure.addEventListener('pointermove', onMove)
    figure.addEventListener('pointerup', onRelease)
    figure.addEventListener('pointercancel', onRelease)
    figure.addEventListener('lostpointercapture', onRelease)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(raf)
      loadObserver.disconnect()
      playObserver.disconnect()
      figure.removeEventListener('pointerdown', onDown)
      figure.removeEventListener('pointermove', onMove)
      figure.removeEventListener('pointerup', onRelease)
      figure.removeEventListener('pointercancel', onRelease)
      figure.removeEventListener('lostpointercapture', onRelease)
      frames.forEach((image) => {
        image.onload = null
        image.onerror = null
      })
    }
  }, [base, count, ext])

  return (
    <div
      ref={figureRef}
      className={`relative select-none ${ready ? 'cursor-grab active:cursor-grabbing' : ''} ${className}`}
      style={{ aspectRatio: `${width} / ${height}`, touchAction: 'pan-y' }}
    >
      <img
        src={`${base}000${ext}`}
        width={width}
        height={height}
        alt={live ? '' : alt}
        draggable={false}
        className={`absolute inset-0 w-full h-full object-contain ${live ? 'invisible' : ''}`}
      />
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        role="img"
        aria-label={alt}
        className={`absolute inset-0 w-full h-full ${live ? '' : 'invisible'}`}
      />
    </div>
  )
}
