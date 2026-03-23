import Link from "next/link";
import AnimatedCounter from "./components/AnimatedCounter";
import SectionReveal from "./components/SectionReveal";

/* ─── Icons ─── */
function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CodeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ActivityIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page-enter">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-[72px] overflow-hidden">
        {/* Dot-grid background on the sides */}
        <div className="grid-bg" />

        {/* Subtle grain */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

        <div className="section-container section-padding relative z-10">
          {/* Eyebrow — use accent-sage here */}
          <div className="animate-fade-up">
            <span className="tag mb-8 inline-block border-accent-sage text-accent-sage">
              AI Safety Infrastructure
            </span>
          </div>

          {/* Headline — more editorial, asymmetric */}
          <h1 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight max-w-[950px] mb-8 animate-fade-up delay-100">
            Making AI systems safe is not optional
            <span className="text-accent-copper"> \ </span>
            <br className="hidden lg:block" />
            it&apos;s infrastructure.
          </h1>

          {/* Sub-line */}
          <p className="text-lg md:text-xl leading-relaxed text-secondary max-w-[620px] mb-12 animate-fade-up delay-200">
            Providing enterprise-grade models for safety monitoring, adaptive
            benchmark distillation, and autonomous red-teaming. We turn AI
            compliance into a competitive advantage.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-20 animate-fade-up delay-300">
            <Link href="/solutions" className="btn-primary bg-accent-slate! hover:bg-accent-slate-light!">
              Explore Solutions
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link href="/research" className="btn-secondary">
              Our Research
            </Link>
          </div>

          {/* Labeled divider */}
          <div className="labeled-divider animate-fade-up delay-400">
            <span>By the numbers</span>
          </div>

          {/* Stats row — diversify colors here */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-fade-up delay-500">
            <AnimatedCounter end={93} suffix="+" label="Red-Team Vectors" labelClassName="text-primary" />
            <AnimatedCounter end={875} suffix="+" label="Benchmark Categories" labelClassName="text-primary" />
            <AnimatedCounter end={3} suffix="x" label="Detection Speed" labelClassName="text-primary" />
            <AnimatedCounter end={231} suffix="+" label="Risk Vectors" labelClassName="text-primary" />
          </div>
        </div>
      </section>

      {/* ═══════════ PILLARS SECTION ═══════════ */}
      <section className="bg-secondary/30 relative">
        <div className="section-container section-padding">
          <SectionReveal>
            <div className="max-w-2xl mb-16">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-6">
                The Infrastructure of Accountability
              </h2>
              <p className="text-secondary leading-relaxed">
                As AI models transition from laboratory curiosities to core
                business infrastructure, the standard for safety must evolve.
                We provide the layers of monitoring and stress-testing required
                for mission-critical deployment.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal delay={100}>
              <div className="card h-full flex flex-col items-start gap-6 border-l-2 border-accent-sage">
                <div className="w-12 h-12 flex items-center justify-center bg-accent-sage/10 text-accent-sage rounded-full">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display mb-3">Systematic Defense</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    Moving beyond ad-hoc safety checks to continuous,
                    autonomous monitoring. Our models detect drift and
                    emergent vulnerabilities in real-time.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="card h-full flex flex-col items-start gap-6 border-l-2 border-accent-sage">
                <div className="w-12 h-12 flex items-center justify-center bg-accent-sage/10 text-accent-sage rounded-full">
                  <ActivityIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display mb-3">Adaptive Benchmarks</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    Stop cherry-picking metrics. Our engine identifies the
                    mathematically ideal subset of benchmarks to verify your
                    specific deployment constraints.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="card h-full flex flex-col items-start gap-6 border-l-2 border-accent-sage">
                <div className="w-12 h-12 flex items-center justify-center bg-accent-sage/10 text-accent-sage rounded-full">
                  <CodeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display mb-3">Red-Team Automation</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    Our platform executes multi-turn adversarial attack
                    chains, uncovering reasoning flaws that standard static
                    scanners consistently miss.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION STRIP ═══════════ */}
      <section className="section-padding overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent-sage/5 rounded-full blur-3xl -z-10" />
                <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight mb-8">
                  Empowering the regulators and the regulated.
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="text-lg text-secondary leading-relaxed">
                    We bridge the gap between technical safety research and
                    regulatory requirements. Our tools provide the evidence
                    needed to prove accountability to stakeholders and
                    governing bodies.
                  </p>
                  <div className="flex flex-wrap gap-8 py-6 border-y border-subtle">
                    <div>
                      <span className="font-display text-4xl text-accent-blue font-medium">99.8%</span>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted mt-2">Vulnerability Coverage</p>
                    </div>
                    <div>
                      <span className="font-display text-4xl text-accent-blue font-medium">1.2ms</span>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted mt-2">Monitoring Latency</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-card border border-accent-blue shadow-sm flex flex-col gap-4 group hover:border-accent-copper transition-colors duration-300">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent-blue">EU AI Act</h4>
                  <p className="text-sm text-secondary leading-relaxed font-medium">
                    Automated risk classification and testing requirements
                    built directly into your workflow.
                  </p>
                </div>
                <div className="p-8 bg-card border border-accent-blue shadow-sm flex flex-col gap-4 group hover:border-accent-copper transition-colors duration-300">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent-blue">NIST RMF</h4>
                  <p className="text-sm text-secondary leading-relaxed font-medium">
                    Operationalizing the Risk Management Framework for
                    generative AI and agentic systems.
                  </p>
                </div>
                <div className="p-8 bg-card border border-accent-blue shadow-sm flex flex-col gap-4 group hover:border-accent-copper transition-colors duration-300">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent-blue">Enterprise Audit</h4>
                  <p className="text-sm text-secondary leading-relaxed font-medium">
                    Comprehensive audit trails that satisfy internal risk
                    committees and external auditors.
                  </p>
                </div>
                <div className="p-8 bg-card border border-accent-blue shadow-sm flex flex-col gap-4 group hover:border-accent-copper transition-colors duration-300">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent-blue">Agentic Trust</h4>
                  <p className="text-sm text-secondary leading-relaxed font-medium">
                    Safety guarantees for autonomous agents executing complex
                    tasks across enterprise data.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ RESEARCH STRIP ═══════════ */}
      <section className="bg-background-dark text-on-dark section-padding bg-dark">
        <div className="section-container">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-sage-light mb-4 block">
                  The Research Core
                </span>
                <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.1]">
                  Safety is a theoretical problem before it is a technical one.
                </h2>
              </div>
              <Link href="/research" className="text-sm font-semibold text-accent-sage-light flex items-center gap-2 hover:gap-3 transition-all">
                View Publication Library <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Formal Methods in LLM Bound Verification",
                type: "White Paper",
                authors: "Labs Research Team",
                color: "accent-sage-light",
              },
              {
                title: "Adversarial Drift in Agentic Workflows",
                type: "Conference Paper",
                authors: "Safety & Logic Group",
                color: "accent-copper-light",
              },
              {
                title: "Benchmark Distillation & Data Bias",
                type: "Technical Thesis",
                authors: "Accountability Division",
                color: "accent-slate-light",
              },
            ].map((paper, i) => (
              <SectionReveal key={paper.title} delay={i * 100}>
                <div className="flex flex-col gap-4 pt-8 border-t border-white/10 group cursor-pointer">
                  <span className={`text-[10px] font-bold uppercase tracking-widest text-${paper.color}`}>
                    {paper.type}
                  </span >
                  <h4 className="font-display text-lg leading-snug group-hover:text-accent-sage-light transition-colors">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-white/40">{paper.authors}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="bg-secondary/20">
        <div className="section-container section-padding">
          <div className="max-w-[800px] mx-auto text-center">
            <SectionReveal>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.02] tracking-tight mb-8">
                Build the future. Audited.
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-12">
                Join the leading organizations across banking, energy, and
                government using Truth Audit Labs to deploy AI with absolute
                confidence.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/solutions" className="btn-primary bg-accent-slate!">
                  Request Access
                </Link>
                <Link href="mailto:contact@truthauditlabs.com" className="btn-secondary">
                  Contact Sales
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
