"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "@/config/company";
import { useLanguage } from "@/config/language";

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
  const { language, messages, setLanguage } = useLanguage();
  const navigationItems = [
    { label: messages.nav.overview, href: "#overview" },
    { label: messages.nav.build, href: "#construction-story" },
    { label: messages.nav.about, href: "#about" },
    { label: messages.nav.services, href: "#services" },
    { label: messages.nav.process, href: "#process" },
    { label: messages.nav.principles, href: "#principles" },
    { label: messages.nav.contact, href: "#contact" },
  ];
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
    <header className={`site-navbar${isScrolled ? " is-scrolled" : ""}`} lang={language}>
      <a className="site-brand" href="#top" onClick={closeMenu} aria-label={company.name}>
        <BrandMark />
        <span className="brand-name">
          <span>WIJEWARDHANA</span>
          <span>CONSTRUCTION</span>
        </span>
      </a>

      <nav className="desktop-navigation" aria-label={messages.nav.primary}>
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

      <div className="navbar-tools">
        <div className="language-switcher" role="group" aria-label={messages.language.label}>
          <button type="button" aria-label={messages.language.english} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>
            EN
          </button>
          <span aria-hidden="true">/</span>
          <button type="button" lang="si" aria-label={messages.language.sinhala} aria-pressed={language === "si"} onClick={() => setLanguage("si")}>
            සිං
          </button>
        </div>

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? messages.nav.close : messages.nav.open}
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon open={menuOpen} />
      </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label={messages.nav.mobile}
        data-open={menuOpen}
        inert={!menuOpen}
      >
        <span className="mobile-nav-label">{messages.nav.explore}</span>
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
