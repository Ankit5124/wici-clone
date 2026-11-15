import React, { useState } from 'react'
import { Terminal, Code2, Cpu, Globe, ArrowRight, Check } from 'lucide-react'

export const WiciOneDevelopers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'driver' | 'sdk' | 'api'>('driver')

  return (
    <section id="developers" className="py-24 px-8 border-t border-[#d2d2d7]/50 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-bold mb-3">
          FOR DEVELOPERS
        </span>
        <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold text-[#1d1d1f] tracking-tight">
          Three ways to build with WiCi.
        </h2>
        <p className="mt-4 text-base text-[#6e6e73] max-w-[620px]">
          Target the wireless GPU through familiar system drivers, a native Python SDK, or local HTTP/WebSocket APIs.
        </p>
      </div>

      {/* Segmented Tier Tabs */}
      <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/70 w-fit mx-auto mb-12">
        <button
          onClick={() => setActiveTab('driver')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
            activeTab === 'driver'
              ? 'bg-[#56558e] text-white shadow-md'
              : 'text-[#6e6e73] hover:text-[#1d1d1f]'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>Virtual GPU Driver</span>
        </button>

        <button
          onClick={() => setActiveTab('sdk')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
            activeTab === 'sdk'
              ? 'bg-[#56558e] text-white shadow-md'
              : 'text-[#6e6e73] hover:text-[#1d1d1f]'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>WiCi SDK (Python / C++)</span>
        </button>

        <button
          onClick={() => setActiveTab('api')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
            activeTab === 'api'
              ? 'bg-[#56558e] text-white shadow-md'
              : 'text-[#6e6e73] hover:text-[#1d1d1f]'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>Local REST / gRPC API</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#0f0e17] text-white p-8 md:p-12 shadow-2xl border border-white/10">
        {activeTab === 'driver' && (
          <>
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c0bfe4]">
                LEVEL 1 · SYSTEM DRIVER
              </span>
              <h3 className="text-3xl font-bold tracking-tight">
                Zero code changes. Works with your existing stack.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The WiCi Virtual Driver installs on macOS, Windows, and Linux. It exposes a native PCIe graphics device to your OS over Wi-Fi 7. Your applications think a physical RTX GPU is plugged directly into your motherboard.
              </p>

              <div className="flex flex-col gap-2.5 text-xs font-medium text-zinc-300 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Compatible with PyTorch, TensorFlow, JAX, and ONNX Runtime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Direct3D 12, Vulkan, and Metal hardware acceleration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Sub-millisecond driver virtualization latency</span>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#c0bfe4] hover:text-white font-semibold text-sm transition mt-2"
              >
                <span>Download driver installer</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-black/60 border border-white/10 p-6 font-mono text-xs text-zinc-300 shadow-inner">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10 text-zinc-400">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>bash - macOS / Linux</span>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-500"># Install the WiCi Virtual GPU driver</p>
                <p className="text-white">$ curl -fsSL https://wici.ai/install.sh | sh</p>
                <p className="text-emerald-400">✓ WiCi AirLink kernel driver loaded</p>
                <p className="text-zinc-500 mt-4"># Check connected wireless GPU status</p>
                <p className="text-white">$ nvidia-smi</p>
                <p className="text-zinc-300">| NVIDIA-SMI 570.86    Driver Version: 570.86    CUDA: 12.8 |</p>
                <p className="text-zinc-300">| GPU  Name        Persistence-M | Bus-Id        Disp.A |</p>
                <p className="text-emerald-400">|   0  RTX 5090 (Wi-Fi 7)    On | 00000000:01:00.0 Off |</p>
                <p className="text-zinc-400">|  0.8ms latency · 4.8 Gbps AirLink transport active     |</p>
              </div>
            </div>
          </>
        )}

        {activeTab === 'sdk' && (
          <>
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c0bfe4]">
                LEVEL 2 · NATIVE SDK
              </span>
              <h3 className="text-3xl font-bold tracking-tight">
                Direct model loading and streaming memory allocation.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The Python and C++ SDK provides fine-grained control over weights streaming, memory compression, and multi-tenant task priority across connected client devices.
              </p>

              <div className="flex flex-col gap-2.5 text-xs font-medium text-zinc-300 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>pip install wici-sdk with pre-built wheels for arm64 & x86_64</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Asynchronous tensor paging and zero-copy host buffers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Supports Llama 3.3, DeepSeek V3, Kimi K3, and FLUX.2</span>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#c0bfe4] hover:text-white font-semibold text-sm transition mt-2"
              >
                <span>Browse Python SDK documentation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-black/60 border border-white/10 p-6 font-mono text-xs text-zinc-300 shadow-inner">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10 text-zinc-400">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>inference.py</span>
              </div>
              <div className="space-y-1.5">
                <p><span className="text-purple-400">import</span> wici</p>
                <p><span className="text-purple-400">from</span> wici.infer <span className="text-purple-400">import</span> Engine</p>
                <p className="text-zinc-500 mt-2"># Connect to local WiCi One cluster wirelessly</p>
                <p>cluster = wici.connect(<span className="text-emerald-300">"wici-one.local"</span>)</p>
                <p>engine = Engine(cluster, model=<span className="text-emerald-300">"deepseek-ai/DeepSeek-V3"</span>)</p>
                <p className="text-zinc-500 mt-2"># Stream tokens with sub-millisecond response</p>
                <p><span className="text-purple-400">for</span> token <span className="text-purple-400">in</span> engine.generate(<span className="text-emerald-300">"Explain quantum latency:"</span>):</p>
                <p className="pl-4 text-emerald-400">print(token.text, end="", flush=True)</p>
              </div>
            </div>
          </>
        )}

        {activeTab === 'api' && (
          <>
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c0bfe4]">
                LEVEL 3 · LOCAL HTTP & WEBSOCKET API
              </span>
              <h3 className="text-3xl font-bold tracking-tight">
                Drop-in OpenAI API compatible endpoints.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                WiCi One runs an onboard high-performance HTTP server exposing <code className="text-xs bg-white/10 px-2 py-0.5 rounded text-emerald-400">/v1/chat/completions</code>, <code className="text-xs bg-white/10 px-2 py-0.5 rounded text-emerald-400">/v1/embeddings</code>, and streaming WebSocket channels. Any AI app configured for OpenAI or Ollama works immediately without modifying client code.
              </p>

              <div className="flex flex-col gap-2.5 text-xs font-medium text-zinc-300 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Fully compatible with Cursor, Continue.dev, and LibreChat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>mTLS mutual authentication for zero-trust private local networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Built-in streaming telemetry & token-per-second monitoring</span>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#c0bfe4] hover:text-white font-semibold text-sm transition mt-2"
              >
                <span>View OpenAPI specification</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-black/60 border border-white/10 p-6 font-mono text-xs text-zinc-300 shadow-inner">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10 text-zinc-400">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>curl - OpenAI API format</span>
              </div>
              <div className="space-y-1.5">
                <p>curl http://wici-one.local:8080/v1/chat/completions \</p>
                <p className="pl-4">-H <span className="text-emerald-300">"Content-Type: application/json"</span> \</p>
                <p className="pl-4">-d <span className="text-emerald-300">'{JSON.stringify({ model: "llama-3.3-70b", stream: true })}'</span></p>
                <p className="text-emerald-400 mt-3">HTTP/1.1 200 OK</p>
                <p className="text-zinc-400">Content-Type: text/event-stream</p>
                <p className="text-zinc-300">data: {"{"}"choices":[{"{"}"delta":{"{"}"content":"WiCi One"{"}"}{"}"}]{"}"}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
