import Link from "next/link";

const FOOTER_LINKS = {
  Solutions: [
    { label: "Safety Monitor", href: "/solutions" },
    { label: "Benchmark Distiller", href: "/solutions" },
    { label: "Red-Team Suite", href: "/solutions" },
    { label: "Compliance Reports", href: "/solutions" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Careers", href: "/" },
    { label: "Contact", href: "/" },
  ],
  Resources: [
    { label: "Documentation", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Case Studies", href: "/" },
    { label: "API Reference", href: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-(--bg-dark) text-(--text-on-dark)">
      <div className="section-container section-padding">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="no-underline">
              <span className="font-display text-xl tracking-tight block mb-4">
                Truth Audit Labs
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-(--text-on-dark)/60 max-w-[260px]">
              Building the infrastructure for AI accountability. Safety
              monitoring, adaptive benchmarking, and red-teaming at scale.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-(--text-on-dark)/40 mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-(--text-on-dark)/70 hover:text-(--text-on-dark) transition-colors duration-200 no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mt-16 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-(--text-on-dark)/40">
          <span>
            © {new Date().getFullYear()} Truth Audit Labs. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="hover:text-(--text-on-dark)/70 transition-colors no-underline text-(--text-on-dark)/40"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="hover:text-(--text-on-dark)/70 transition-colors no-underline text-(--text-on-dark)/40"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
