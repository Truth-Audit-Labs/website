import type { Metadata } from "next";
import AnimatedCounter from "../components/AnimatedCounter";
import SectionReveal from "../components/SectionReveal";

export const metadata: Metadata = {
  title: "Why Us — Truth Audit Labs",
  description:
    "Four pillars of AI assurance: adaptive benchmarking, automated red-teaming, safety monitoring, and theoretical research — all grounded in numbers.",
};

/* ─── Icons ─── */
function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

function TargetIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function BookIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

const PILLARS = [
  {
    icon: ChartIcon,
    stat: { end: 956, suffix: "+" },
    statLabel: "Benchmark Categories Analyzed",
    title: "Adaptive Benchmarking",
    description:
      "Our distillation engine selects the statistically optimal subset of benchmarks for your specific system — eliminating cherry-picking and giving you evaluation results you can actually trust.",
    color: "sage" as const,
  },
  {
    icon: TargetIcon,
    stat: { end: 137, suffix: "+" },
    statLabel: "Proprietary Attack Vectors",
    title: "Automated Red-Teaming",
    description:
      "Continuous adversarial testing with multi-step attack chains, reasoning exploitation, and jailbreak detection. Our algorithms find vulnerabilities that manual red-teams miss.",
    color: "sage" as const,
  },
  {
    icon: ShieldIcon,
    stat: { end: 245, suffix: "+" },
    statLabel: "Risk Vectors Monitored",
    title: "Safety Monitoring",
    description:
      "Production-grade monitoring that detects behavioral drift, boundary violations, and emergent risks in real-time with sub-second alerting and full audit trail generation.",
    color: "sage" as const,
  },
  {
    icon: BookIcon,
    stat: { end: 41, suffix: "" },
    statLabel: "Published Papers",
    title: "Theoretical Research",
    description:
      "Our products are built on rigorous theoretical foundations — formal verification, information-theoretic benchmark selection, and mathematical safety guarantees that hold under adversarial conditions.",
    color: "sage" as const,
  },
];

export default function WhyUsPage() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section className="page-header bg-(--bg-secondary)">
        <div className="section-container">
          <SectionReveal>
            <span className="tag mb-6 inline-block">Why Truth Audit Labs</span>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] tracking-tight max-w-[800px] mb-6">
              Four pillars of AI assurance, grounded in numbers.
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="text-(--text-secondary) text-base md:text-lg leading-relaxed max-w-[600px]">
              We don&apos;t just make promises — we deliver measurable, auditable,
              and continuous AI safety infrastructure backed by data.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Top-level stats */}
      {/* <section className="section-padding border-b border-(--border-subtle)">
        <div className="section-container">
          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <AnimatedCounter end={100} suffix="+" label="Red-Team Attack Vectors" />
              <AnimatedCounter end={1000} suffix="+" label="Benchmark Categories" />
              <AnimatedCounter end={3} suffix="x" label="Faster Detection" />
              <AnimatedCounter end={200} suffix="+" label="Risk Vectors" />
            </div>
          </SectionReveal>
        </div>
      </section> */}

      {/* Pillar cards */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              const accent = "--accent-sage";
              return (
                <SectionReveal key={pillar.title} delay={i * 100}>
                  <div className="card flex flex-col gap-5 h-full">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-(${accent})/10 text-(${accent})`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <AnimatedCounter
                        end={pillar.stat.end}
                        suffix={pillar.stat.suffix}
                        label={pillar.statLabel}
                      // labelClassName="text-accen`t-blue!"
                      />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-(--text-secondary) leading-relaxed text-sm flex-1">
                      {pillar.description}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
