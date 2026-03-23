"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Solutions", href: "/solutions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "backdrop-blur-md bg-(--bg-primary)/90 shadow-[0_1px_0_var(--border-subtle)]"
        : "bg-transparent"
        }`}
    >
      <div className="section-container flex items-center justify-between h-[72px]">
        {/* Logo — acts as Home link */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="font-display text-xl tracking-tight text-foreground">
            Truth Audit Labs
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "nav-link-active" : ""
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/solutions"
            className="btn-primary bg-accent-slate! hover:bg-accent-slate-light! transition-colors text-sm"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Hamburger & Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${mobileOpen
          ? "max-h-[450px] border-b border-subtle"
          : "max-h-0"
          } bg-background`}
      >
        <div className="section-container flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link py-3 text-base ${pathname === link.href ? "nav-link-active" : ""
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/solutions"
            className="btn-primary mt-3 text-center justify-center text-sm"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
