"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
];

const SOLUTIONS_PRODUCTS = [
  {
    label: "Safety Monitor",
    href: "/solutions#safety-monitor",
    description: "Continuous oversight for production AI systems",
  },
  {
    label: "Benchmark Distiller",
    href: "/solutions#benchmark-distiller",
    description: "Systematic evaluation across 1,000+ categories",
  },
  {
    label: "Red-Team Suite",
    href: "/solutions#red-team-suite",
    description: "Automated adversarial stress testing",
  },
  {
    label: "Compliance Reports",
    href: "/solutions#compliance-reports",
    description: "Regulatory-ready documentation & audit trails",
  },
];

const SOLUTIONS_SECTORS = [
  { label: "Financial Services", href: "/solutions" },
  { label: "Healthcare", href: "/solutions" },
  { label: "Insurance", href: "/solutions" },
  { label: "Tech / SaaS", href: "/solutions" },
  { label: "Government", href: "/solutions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleDropdownEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSolutionsOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setSolutionsOpen(false), 200);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "backdrop-blur-md bg-(--bg-primary)/90 shadow-[0_1px_0_var(--border-subtle)]"
        : "bg-transparent"
        }`}
    >
      <div className="section-container flex items-center justify-between h-[72px]">
        {/* Logo */}
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
              className={`nav-link ${pathname === link.href ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Solutions with dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`nav-link inline-flex items-center gap-1 bg-transparent border-none cursor-pointer font-[inherit] ${
                pathname === "/solutions" ? "nav-link-active" : ""
              }`}
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M2 4L5 7L8 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mega dropdown */}
            <div
              className={`solutions-dropdown ${solutionsOpen ? "solutions-dropdown-open" : ""}`}
            >
              <div className="flex gap-0 min-w-[620px]">
                {/* Products column */}
                <div className="flex-1 p-6 pr-4">
                  <span className="block text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[var(--text-muted)] mb-4">
                    By Product
                  </span>
                  <div className="flex flex-col gap-1">
                    {SOLUTIONS_PRODUCTS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="solutions-dropdown-item"
                      >
                        <span className="block text-sm font-medium text-[var(--text-primary)]">
                          {item.label}
                        </span>
                        <span className="block text-xs text-[var(--text-muted)] mt-0.5">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px bg-[var(--border-subtle)] my-6" />

                {/* Sectors column */}
                <div className="w-[180px] p-6 pl-4">
                  <span className="block text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[var(--text-muted)] mb-4">
                    By Sector
                  </span>
                  <div className="flex flex-col gap-1">
                    {SOLUTIONS_SECTORS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="solutions-dropdown-sector"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-[var(--border-subtle)] px-6 py-3 flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">
                  Explore all solutions
                </span>
                <Link
                  href="/solutions"
                  className="text-xs font-medium text-[var(--accent-copper)] hover:underline"
                >
                  View all &rarr;
                </Link>
              </div>
            </div>
          </div>
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
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${mobileOpen
          ? "max-h-[600px] border-b border-subtle"
          : "max-h-0"
          } bg-background`}
      >
        <div className="section-container flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link py-3 text-base ${pathname === link.href ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Solutions accordion */}
          <button
            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            className={`nav-link py-3 text-base bg-transparent border-none cursor-pointer text-left font-[inherit] inline-flex items-center gap-2 ${
              pathname === "/solutions" ? "nav-link-active" : ""
            }`}
          >
            Solutions
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className={`transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
            >
              <path
                d="M2 4L5 7L8 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileSolutionsOpen ? "max-h-[400px]" : "max-h-0"
            }`}
          >
            <div className="pl-4 flex flex-col gap-1 pb-2">
              {SOLUTIONS_PRODUCTS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors no-underline"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/solutions"
                className="py-2 text-xs font-medium text-[var(--accent-copper)] no-underline"
              >
                View all solutions &rarr;
              </Link>
            </div>
          </div>

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
