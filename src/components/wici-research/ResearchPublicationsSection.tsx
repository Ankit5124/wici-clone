import React from 'react'
import { ArrowUpRight, FileText } from 'lucide-react'

interface PaperLink {
  label: string
  url: string
}

interface Paper {
  title: string
  venue: string
  links: PaperLink[]
}

interface PublicationCategory {
  category: string
  papers: Paper[]
}

const PUBLICATIONS_DATA: PublicationCategory[] = [
  {
    category: 'Wireless GPU',
    papers: [
      {
        title: 'WiCi: Wireless GPU Computing Infrastructure',
        venue: 'Preprint · arXiv:2608.24204 · August 2026',
        links: [
          { label: 'arXiv', url: 'https://arxiv.org/abs/2608.24204' },
          { label: 'PDF', url: 'https://arxiv.org/pdf/2608.24204' },
        ],
      },
      {
        title: 'Law: Towards Consistent Low Latency in 802.11 Home Networks',
        venue: 'USENIX NSDI 2026',
        links: [
          { label: 'PDF', url: 'https://www.usenix.org/system/files/nsdi26-shen-yibin.pdf' },
          { label: 'Proceedings', url: 'https://www.usenix.org/conference/nsdi26/presentation/shen-yibin' },
        ],
      },
      {
        title: 'Mortise: Auto-tuning Congestion Control to Optimize QoE via Network-Aware Parameter Optimization',
        venue: 'USENIX NSDI 2026',
        links: [
          { label: 'PDF', url: 'https://www.usenix.org/system/files/nsdi26-shen-yixin.pdf' },
          { label: 'Proceedings', url: 'https://www.usenix.org/conference/nsdi26/presentation/shen-yixin' },
        ],
      },
      {
        title: "Confucius: Adapting Home Routers to Congestion Control's Reactions for Consistent Low Latency",
        venue: 'IEEE INFOCOM 2026',
        links: [
          { label: 'IEEE Xplore', url: 'https://doi.org/10.1109/INFOCOM59046.2026.11571239' },
          { label: 'arXiv', url: 'https://arxiv.org/abs/2310.18030' },
        ],
      },
    ],
  },
  {
    category: 'SSD inference',
    papers: [
      {
        title: 'SSD-LLaMA: SSD-Native Inference for Trillion-Parameter MoE at 1+ Token/s on a Consumer PC',
        venue: 'Preprint · arXiv:2609.18110 · September 2026',
        links: [
          { label: 'arXiv', url: 'https://arxiv.org/abs/2609.18110' },
          { label: 'PDF', url: 'https://arxiv.org/pdf/2609.18110' },
        ],
      },
    ],
  },
  {
    category: 'Real-time interaction',
    papers: [
      {
        title: 'Make a Video Call with LLM: A Measurement Campaign over Six Mainstream Apps',
        venue: 'Preprint · arXiv:2510.00481 · Revised May 2026',
        links: [
          { label: 'PDF', url: 'https://arxiv.org/pdf/2510.00481' },
          { label: 'arXiv', url: 'https://arxiv.org/abs/2510.00481' },
          { label: 'Project', url: 'https://callarena.net/' },
        ],
      },
      {
        title: 'MAE: More Adaptive Video Encoder for Consistent Low Latency in High-Quality Real-Time Communication',
        venue: 'USENIX NSDI 2026',
        links: [
          { label: 'PDF', url: 'https://www.usenix.org/system/files/nsdi26-meng.pdf' },
          { label: 'Proceedings', url: 'https://www.usenix.org/conference/nsdi26/presentation/meng' },
        ],
      },
      {
        title: 'DeNC++: Efficient Diffusion-Enhanced Neural Codec for End-to-end Semantic Streaming at the Edge',
        venue: 'AAAI 2026',
        links: [
          { label: 'PDF', url: 'https://ojs.aaai.org/index.php/AAAI/article/view/40135/44096' },
          { label: 'Proceedings', url: 'https://doi.org/10.1609/aaai.v40i34.40135' },
        ],
      },
      {
        title: 'ACE: Sending Burstiness Control for High-Quality Real-time Communication',
        venue: 'ACM SIGCOMM 2025',
        links: [
          { label: 'PDF', url: 'https://zilimeng.com/papers/ace-sigcomm25.pdf' },
          { label: 'Proceedings', url: 'https://doi.org/10.1145/3718958.3750520' },
        ],
      },
      {
        title: 'Tooth: Toward Optimal Balance of Video QoE and Redundancy Cost by Fine-Grained FEC in Cloud Gaming Streaming',
        venue: 'USENIX NSDI 2025',
        links: [
          { label: 'PDF', url: 'https://www.usenix.org/system/files/nsdi25-an.pdf' },
          { label: 'Proceedings', url: 'https://www.usenix.org/conference/nsdi25/presentation/an' },
        ],
      },
    ],
  },
]

export const ResearchPublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-20 px-6 md:px-8 max-w-[1400px] mx-auto w-full">
      <div className="mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#56558e] block mb-2">
          PEER-REVIEWED & PREPRINTS
        </span>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#1d1d1f] tracking-tight">
          Academic Publications
        </h2>
        <p className="mt-2 text-base text-[#6e6e73] max-w-xl">
          Systems research papers presented at top computer systems conferences (USENIX NSDI, ACM SIGCOMM, IEEE INFOCOM, AAAI).
        </p>
      </div>

      <div className="space-y-16">
        {PUBLICATIONS_DATA.map((group, groupIdx) => (
          <div key={groupIdx} className="border-t border-[#e5e5ea] pt-8">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#56558e]" />
              <span>{group.category}</span>
            </h3>

            <div className="divide-y divide-[#f0f0f2]">
              {group.papers.map((paper, paperIdx) => (
                <div
                  key={paperIdx}
                  className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#fafafc] px-3 -mx-3 rounded-xl transition duration-200"
                >
                  <div className="max-w-3xl">
                    <h4 className="text-[17px] font-semibold text-[#1d1d1f] group-hover:text-[#56558e] transition leading-snug">
                      <a
                        href={paper.links[0]?.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1.5"
                      >
                        <FileText className="w-4 h-4 text-[#86868b] inline shrink-0" />
                        <span>{paper.title}</span>
                      </a>
                    </h4>
                    <p className="text-xs font-mono text-[#86868b] mt-1.5 pl-5.5">
                      {paper.venue}
                    </p>
                  </div>

                  {/* Paper Resource Links */}
                  <div className="flex items-center gap-2 pl-5.5 md:pl-0 shrink-0">
                    {paper.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#f5f5f7] hover:bg-[#1d1d1f] hover:text-white text-xs font-medium text-[#1d1d1f] border border-[#d2d2d7]/50 transition duration-150"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
