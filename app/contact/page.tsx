export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Subtle grid background */}
      <div className="grid-bg" />

      <div className="relative z-10 w-full max-w-lg mx-auto animate-fade-up">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-foreground transition-colors mb-12 no-underline"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M11 7H3M6 10L3 7l3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </a>

        {/* Logo mark */}
        {/* <div className="mb-6">
          <svg
            width="36"
            height="36"
            viewBox="0 0 56 56"
            fill="none"
            className="text-accent-copper"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="50" height="50" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="16" y="16" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(45 28 28)" />
            <circle cx="28" cy="28" r="2.5" fill="currentColor" />
          </svg>
        </div> */}

        <h1 className="font-display text-[1.75rem] md:text-[2.25rem] tracking-tight text-foreground mb-2">
          Contact Us
        </h1>
        <p className="text-(--text-muted) text-sm mb-8">
          Get in touch with Truth Audit Labs.
        </p>

        {/* Email card */}
        <div className="card mb-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-(--text-muted) mb-5">
            Email
          </h2>
          <a
            href="mailto:contact@truthauditlabs.ai"
            className="text-[0.95rem] text-(--text-secondary) hover:text-foreground transition-colors"
          >
            contact@truthauditlabs.ai
          </a>
        </div>

        {/* Address card */}
        <div className="card">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-(--text-muted) mb-5">
            Registered Office
          </h2>
          <address className="not-italic text-(--text-secondary) leading-relaxed text-[0.95rem]">
            <span className="block font-medium text-foreground mb-1">
              Truth Audit Labs Private Limited
            </span>
            91 Springboard Business Hub Pvt Ltd<br />
            5th Floor, Prius Platinum D3 P3B<br />
            District Centre Saket<br />
            New Delhi 110017
          </address>
        </div>
      </div>
    </div>
  );
}
