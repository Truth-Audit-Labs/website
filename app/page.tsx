import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="grid-bg" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,115,62,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="animate-fade-in">
          <Image
            src="/TAL_logo_transparent.png"
            alt="Truth Audit Labs"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* Status pill */}
        {/* <div
          className="mb-8 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <span className="tag">Stealth Mode</span>
        </div> */}

        {/* Tagline */}
        <p
          className="text-[2rem] md:text-[2.75rem] font-display tracking-tight text-foreground leading-tight mb-16 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          Enabling organisations to deploy AI safely and responsibly.
        </p>

        {/* CTA */}
        <a
          href="/contact"
          className="btn-primary animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          Contact Us
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 7h8M8 4l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
