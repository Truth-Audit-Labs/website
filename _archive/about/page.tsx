import type { Metadata } from "next";
import SectionReveal from "../components/SectionReveal";

export const metadata: Metadata = {
  title: "About — Truth Audit Labs",
  description:
    "Truth Audit Labs is a research-driven AI safety company building the infrastructure for AI accountability across enterprises and governments.",
};

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section className="page-header bg-(--bg-secondary)">
        <div className="section-container">
          <SectionReveal>
            <span className="tag mb-6 inline-block">About Us</span>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] tracking-tight max-w-[800px]">
              We build the tools that make AI accountability possible.
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
            {/* Left — big thesis */}
            <div>
              <SectionReveal>
                <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.15] tracking-tight mb-8">
                  Safety shouldn&apos;t be an afterthought. It should be infrastructure.
                </h2>
              </SectionReveal>
              <SectionReveal delay={100}>
                <div className="flex items-start gap-4 p-6 bg-(--bg-secondary) border-l-2 border-accent-copper">
                  <p className="text-(--text-secondary) text-sm leading-relaxed italic">
                    &quot;The organizations deploying AI need better tools to understand
                    what their systems actually do. We exist to build those tools.&quot;
                  </p>
                </div>
              </SectionReveal>
            </div>

            {/* Right — paragraphs */}
            <div className="flex flex-col gap-6">
              <SectionReveal delay={100}>
                <p className="text-(--text-secondary) leading-relaxed text-base md:text-lg">
                  Truth Audit Labs is a research-driven AI safety company. We
                  develop systematic approaches to evaluating, monitoring, and
                  stress-testing AI systems — from foundation models to
                  enterprise agentic workflows.
                </p>
              </SectionReveal>
              <SectionReveal delay={200}>
                <p className="text-(--text-secondary) leading-relaxed text-base md:text-lg">
                  Our work sits at the intersection of theoretical safety
                  research and production-grade tooling. We believe safety
                  shouldn&apos;t be an afterthought or a checkbox — it should be
                  embedded in the infrastructure layer where AI systems are
                  built, tested, and deployed.
                </p>
              </SectionReveal>
              <SectionReveal delay={300}>
                <p className="text-(--text-secondary) leading-relaxed text-base md:text-lg">
                  Our team spans machine learning researchers, security
                  engineers, and policy experts united by a single thesis:{" "}
                  <strong className="text-foreground">
                    the organizations deploying AI need better tools to
                    understand what their systems actually do.
                  </strong>
                </p>
              </SectionReveal>
            </div>
          </div>

          {/* Values */}
          <div className="labeled-divider mt-20">
            <span>What drives us</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <SectionReveal delay={100}>
              <div className="card h-full flex flex-col gap-4">
                <span className="font-display text-5xl text-(--accent-copper)/50">01</span>
                <h3 className="text-lg font-semibold tracking-tight">Rigor Over Hype</h3>
                <p className="text-sm text-(--text-secondary) leading-relaxed">
                  Every claim is backed by peer-reviewed research. We don&apos;t
                  sell fear — we build tools that work under adversarial
                  conditions.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={200}>
              <div className="card h-full flex flex-col gap-4">
                <span className="font-display text-5xl text-(--accent-copper)/50">02</span>
                <h3 className="text-lg font-semibold tracking-tight">Transparency First</h3>
                <p className="text-sm text-(--text-secondary) leading-relaxed">
                  We publish our research, share our methods, and build open
                  standards. Trust comes from transparency, not from
                  black-box solutions.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={300}>
              <div className="card h-full flex flex-col gap-4">
                <span className="font-display text-5xl text-(--accent-copper)/50">03</span>
                <h3 className="text-lg font-semibold tracking-tight">Infrastructure Mindset</h3>
                <p className="text-sm text-(--text-secondary) leading-relaxed">
                  Safety monitoring should run like power infrastructure —
                  always on, always reliable, and everyone should have access
                  to it.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
