"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "@/config/company";

const navigationItems = [
  { label: "Overview", href: "#overview" },
  { label: "The build", href: "#construction-story" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" },
];

function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      viewBox="0 0 42 42"
      fill="none"
    >
      <path d="M5 35V16.5L21 6l16 10.5V35" />
      <path d="M12 35V21h18v14M5 35h32M21 21v14" />
      <path d="M2 39h38" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" />
      ) : (
        <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
      )}
    </svg>
  );
}

export function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#overview");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    const updateActiveLink = () => {
      const about = document.querySelector<HTMLElement>("#about");
      const construction = document.querySelector<HTMLElement>("#construction-story");
      const services = document.querySelector<HTMLElement>("#services");
      const process = document.querySelector<HTMLElement>("#process");
      const principles = document.querySelector<HTMLElement>("#principles");
      const contact = document.querySelector<HTMLElement>("#contact");
      if (contact && contact.getBoundingClientRect().top < window.innerHeight * 0.55) {
        setActiveHref("#contact");
      } else if (principles && principles.getBoundingClientRect().top < window.innerHeight * 0.55) {
        setActiveHref("#principles");
      } else if (process && process.getBoundingClientRect().top < window.innerHeight * 0.55) {
        setActiveHref("#process");
      } else if (services && services.getBoundingClientRect().top < window.innerHeight * 0.55) {
        setActiveHref("#services");
      } else if (about && about.getBoundingClientRect().top < window.innerHeight * 0.55) {
        setActiveHref("#about");
      } else if (construction && construction.getBoundingClientRect().top < window.innerHeight * 0.55) {
        setActiveHref("#construction-story");
      } else {
        setActiveHref("#overview");
      }
    };

    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink, { passive: true });
    updateScrollState();
    updateActiveLink();

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-navbar${isScrolled ? " is-scrolled" : ""}`}>
      <a className="site-brand" href="#top" onClick={closeMenu} aria-label={company.name}>
        <BrandMark />
        <span className="brand-name">
          <span>WIJEWARDHANA</span>
          <span>CONSTRUCTION</span>
        </span>
      </a>

      <nav className="desktop-navigation" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeHref === item.href ? "is-active" : undefined}
            aria-current={activeHref === item.href ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon open={menuOpen} />
      </button>

      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile navigation"
        data-open={menuOpen}
        inert={!menuOpen}
      >
        <span className="mobile-nav-label">EXPLORE</span>
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`mobile-nav-link${activeHref === item.href ? " is-active" : ""}`}
            aria-current={activeHref === item.href ? "location" : undefined}
            onClick={closeMenu}
          >
            {item.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
