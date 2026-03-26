import type { Metadata } from "next";
import SectionReveal from "../components/SectionReveal";

export const metadata: Metadata = {
  title: "Research — Truth Audit Labs",
  description:
    "Our research spans theoretical AI safety, adaptive benchmark theory, adversarial robustness, and AI governance frameworks. 41 published papers and counting.",
};

/* ─── Icon ─── */
function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const RESEARCH_AREAS = [
  {
    area: "Theoretical AI Safety",
    description:
      "Formal verification methods for neural network behavior bounds, building mathematical guarantees for AI system safety properties.",
    papers: "12 publications",
    focus: [
      "Behavioral bound verification for transformer architectures",
      "Formal safety proofs under distributional shift",
      "Guaranteed output constraints for generative models",
    ],
  },
  {
    area: "Adaptive Benchmark Theory",
    description:
      "Information-theoretic frameworks for optimal benchmark subset selection that maximize evaluation signal while minimizing computational cost.",
    papers: "8 publications",
    focus: [
      "Mutual-information-based benchmark distillation",
      "Pareto-optimal evaluation suite design",
      "Anti-gaming mechanisms for benchmark selection",
    ],
  },
  {
    area: "Adversarial Robustness",
    description:
      "Novel attack and defense paradigms for large language models, with focus on multi-turn manipulation and emergent deception patterns.",
    papers: "15 publications",
    focus: [
      "Multi-turn reasoning chain exploitation",
      "Emergent deception detection in agentic workflows",
      "Transferable attack strategies across model families",
    ],
  },
  {
    area: "AI Governance Frameworks",
    description:
      "Cross-jurisdictional analysis of AI regulation and technical standards for implementing governance requirements at the infrastructure level.",
    papers: "6 publications",
    focus: [
      "Technical implementation of EU AI Act requirements",
      "NIST AI RMF operationalization patterns",
      "Cross-border regulatory compliance architectures",
    ],
  },
];

export default function ResearchPage() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section className="page-header bg-(--bg-secondary)">
        <div className="section-container">
          <SectionReveal>
            <span className="tag mb-6 inline-block">Research</span>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] tracking-tight max-w-[800px] mb-6">
              Products informed by frontier research.
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="text-(--text-secondary) text-base md:text-lg leading-relaxed max-w-[600px] mb-4">
              Every tool we build is grounded in peer-reviewed research. We
              publish openly and contribute to the broader AI safety community.
            </p>
          </SectionReveal>

          {/* Stats row */}
          <SectionReveal delay={300}>
            <div className="flex flex-wrap gap-12 mt-10 pt-8 border-t border-(--border-subtle)">
              <div>
                <span className="font-display text-3xl text-accent-copper">41</span>
                <p className="text-xs font-semibold tracking-widest uppercase text-(--text-muted) mt-1">Published Papers</p>
              </div>
              <div>
                <span className="font-display text-3xl text-accent-copper">4</span>
                <p className="text-xs font-semibold tracking-widest uppercase text-(--text-muted) mt-1">Research Pillars</p>
              </div>
              <div>
                <span className="font-display text-3xl text-accent-copper">12</span>
                <p className="text-xs font-semibold tracking-widest uppercase text-(--text-muted) mt-1">Research Partners</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding">
        <div className="section-container">
          <div className="flex flex-col gap-8">
            {RESEARCH_AREAS.map((area, i) => (
              <SectionReveal key={area.area} delay={i * 80}>
                <div className="card grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 group cursor-pointer">
                  {/* Left */}
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent-copper">
                      0{i + 1}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl tracking-tight group-hover:text-accent-copper transition-colors">
                      {area.area}
                    </h2>
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent-sage mt-2">
                      {area.papers}
                    </span>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col gap-5">
                    <p className="text-(--text-secondary) leading-relaxed text-sm md:text-base">
                      {area.description}
                    </p>
                    <div className="labeled-divider my-0!">
                      <span>Focus Areas</span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {area.focus.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-(--text-secondary)">
                          <ArrowRightIcon className="w-3.5 h-3.5 text-accent-copper mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
