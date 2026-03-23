import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "../components/SectionReveal";

export const metadata: Metadata = {
  title: "Solutions — Truth Audit Labs",
  description:
    "Enterprise-grade AI safety products: Safety Monitor, Benchmark Distiller, Red-Team Suite, and Compliance Reports — the full lifecycle of AI risk management.",
};

/* ─── Icons ─── */
function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const SOLUTIONS = [
  {
    title: "Safety Monitor",
    tagline: "Continuous oversight for production AI",
    description:
      "Real-time monitoring of AI system behavior patterns, detecting drift, hallucinations, and safety boundary violations before they impact downstream decisions.",
    features: [
      "Behavioral drift detection across 200+ risk vectors",
      "Real-time alerting with sub-second latency",
      "Audit trail generation for regulatory compliance",
      "Integration with existing CI/CD and MLOps pipelines",
    ],
  },
  {
    title: "Benchmark Distiller",
    tagline: "Systematic evaluation, not cherry-picked metrics",
    description:
      "Adaptive benchmark distillation and selection that eliminates cherry-picking. Automatically identifies the ideal subset of benchmarks to rigorously test your specific system.",
    features: [
      "Distillation from 1,000+ benchmark categories",
      "System-specific benchmark subset selection",
      "Cross-model comparative analysis",
      "Eliminates evaluation bias and metric gaming",
    ],
  },
  {
    title: "Red-Team Suite",
    tagline: "Automated adversarial stress testing",
    description:
      "Proprietary automated red-teaming strategies that probe your AI systems with sophisticated multi-step attack chains, uncovering vulnerabilities manual testing misses.",
    features: [
      "100+ proprietary attack vector algorithms",
      "Multi-step reasoning chain exploitation",
      "Agentic workflow vulnerability scanning",
      "Continuous testing — not just point-in-time",
    ],
  },
  {
    title: "Compliance Reports",
    tagline: "Regulatory-ready documentation on demand",
    description:
      "Generate comprehensive security and compliance reports aligned with EU AI Act, NIST AI RMF, and emerging governance frameworks. Built for the audit room.",
    features: [
      "EU AI Act risk classification alignment",
      "NIST AI RMF mapping and evidence collection",
      "Executive-ready summary dashboards",
      "Exportable audit artifacts for regulators",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section className="page-header bg-(--bg-secondary)">
        <div className="section-container">
          <SectionReveal>
            <span className="tag mb-6 inline-block">Solutions</span>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] tracking-tight max-w-[800px] mb-6">
              Enterprise-grade AI safety, delivered as infrastructure.
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="text-(--text-secondary) text-base md:text-lg leading-relaxed max-w-[600px]">
              Four integrated products that cover the full lifecycle of AI risk
              management — from pre-deployment stress testing to continuous
              production monitoring.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Solution cards */}
      <section className="section-padding">
        <div className="section-container">
          <div className="flex flex-col gap-8">
            {SOLUTIONS.map((solution, i) => (
              <SectionReveal key={solution.title} delay={i * 80}>
                <div className="card grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-14">
                  {/* Left */}
                  <div className="flex flex-col gap-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-(--accent-copper)">
                      0{i + 1}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl tracking-tight">
                      {solution.title}
                    </h2>
                    <p className="text-sm font-medium text-(--text-muted)">
                      {solution.tagline}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col gap-5">
                    <p className="text-(--text-secondary) leading-relaxed text-sm md:text-base">
                      {solution.description}
                    </p>
                    <ul className="flex flex-col gap-3 mt-1">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-(--text-secondary)"
                        >
                          <CheckIcon className="w-4 h-4 text-(--accent-sage) mt-0.5 shrink-0" />
                          {feature}
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

      {/* CTA */}
      <section className="bg-(--bg-dark) text-(--text-on-dark)">
        <div className="section-container section-padding">
          <div className="max-w-[700px] mx-auto text-center">
            <SectionReveal>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight mb-6">
                Ready to secure your AI systems?
              </h2>
            </SectionReveal>
            <SectionReveal delay={100}>
              <p className="text-(--text-on-dark)/70 text-base md:text-lg leading-relaxed mb-10">
                Whether you&apos;re deploying agentic workflows at a bank,
                scaling LLMs for government, or building the next AI product —
                we&apos;ll help you do it safely.
              </p>
            </SectionReveal>
            <SectionReveal delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="mailto:contact@truthauditlabs.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-(--accent-copper) text-white font-medium text-sm tracking-wide hover:bg-(--accent-copper-light) transition-all duration-300 hover:translate-y-px hover:shadow-[0_4px_20px_rgba(184,115,62,0.3)] no-underline"
                >
                  Book a Demo
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="mailto:contact@truthauditlabs.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 font-medium text-sm tracking-wide hover:border-white/40 hover:text-white transition-all duration-300 no-underline"
                >
                  Contact Us
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
