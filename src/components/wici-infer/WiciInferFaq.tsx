import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

export const WiciInferFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FaqItem[] = [
    {
      question: 'What is WiCi Infer?',
      answer:
        'WiCi Infer is a free desktop app that runs large language models locally. Discover open LLMs such as Qwen3.6, DeepSeek V4.1 Flash, and Muse Spark Open, download them, and chat with them on your own computer. It is powered by InferSSD, our open-source local inference engine.',
    },
    {
      question: 'Which computers can run local LLMs with WiCi Infer?',
      answer:
        'Macs with Apple Silicon (M1 through M5) and Windows PCs (x64) with modern SSD storage. Qwen3.6 35B runs with 8 GB of memory. 800B-class models such as DeepSeek V4.1 Flash start at 16 GB of memory and require about 520 GB of free SSD space. On Linux, developers can run the InferSSD command-line engine directly.',
    },
    {
      question: 'How is WiCi Infer different from Ollama, LM Studio, or llama.cpp?',
      answer:
        'Most local AI tools are built for models that fit entirely into your computer’s RAM or VRAM, so very large models either fail to load or must be excessively quantized. InferSSD indexes the expert weights of mixture-of-experts (MoE) models on your NVMe SSD and streams in only the weights that each token needs in real time. In our benchmarks, this achieved up to 17.8x the decode throughput of llama.cpp on equivalent hardware.',
    },
    {
      question: 'Can I use a local LLM with Claude Code, OpenCode, or my own apps?',
      answer:
        'Yes. WiCi Infer serves the loaded model through a local OpenAI-compatible API endpoint (http://localhost:11434/v1). Claude Code, OpenCode, Cursor, and any other compatible developer tools can use the exact same local model seamlessly.',
    },
    {
      question: 'Do my prompts leave my computer?',
      answer:
        'No. The model runs entirely on your own hardware, so your prompts, code, and chat history are processed locally without ever reaching a cloud AI service. There is no account, login, or tracking telemetry required.',
    },
    {
      question: 'Is WiCi Infer free?',
      answer:
        'Yes. WiCi Infer is completely free with no subscriptions and no account required. The underlying InferSSD engine is open source on GitHub under the Apache 2.0 license.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-24 px-6 md:px-8 bg-[#f5f5f7] border-t border-[#d2d2d7]/60 w-full scroll-mt-28">
      <div className="max-w-[960px] mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#56558e] mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-[clamp(32px,4.5vw,52px)] font-bold text-[#1d1d1f] tracking-tight leading-[1.08]">
            Questions & Answers
          </h2>
          <p className="mt-3 text-sm text-[#6e6e73]">
            Everything you need to know about WiCi Infer and local SSD model execution.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#d2d2d7]/70 shadow-xs overflow-hidden transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition hover:bg-[#fafafc] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#1d1d1f] pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#1d1d1f]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#6e6e73]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#515154] leading-relaxed border-t border-[#f0f0f2]">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
