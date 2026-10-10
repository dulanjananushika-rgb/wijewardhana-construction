"use client";

import { company } from "@/config/company";
import { useLanguage } from "@/config/language";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const { language, messages } = useLanguage();
  const text = messages.footer;
  const navigationItems = messages.nav;
  const footerLinks = [
    { label: navigationItems.overview, href: "#overview" },
    { label: navigationItems.build, href: "#construction-story" },
    { label: navigationItems.about, href: "#about" },
    { label: navigationItems.services, href: "#services" },
    { label: navigationItems.process, href: "#process" },
    { label: navigationItems.principles, href: "#principles" },
    { label: navigationItems.contact, href: "#contact" },
  ];
  return (
    <footer className={styles.footer} lang={language}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.identity} data-reveal>
            <a className={styles.brand} href="#top" aria-label={`${company.name}, back to top`}>
              <svg aria-hidden="true" viewBox="0 0 42 42" fill="none">
                <path d="M5 35V16.5L21 6l16 10.5V35M12 35V21h18v14M5 35h32M21 21v14M2 39h38" />
              </svg>
              <span>{company.name}</span>
            </a>
            <p>{text.tagline}</p>
          </div>

          <nav className={styles.navigation} aria-label={navigationItems.mobile} data-reveal>
            <h2>{text.explore}</h2>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <div className={styles.contact} data-reveal>
            <h2>{text.getInTouch}</h2>
            <p>{messages.common.location}</p>
            {company.contact.phone && (
              <a href={company.contact.phoneHref}>{company.contact.phone}</a>
            )}
            {company.contact.whatsapp && (
              <a href={company.contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
            )}
            {company.contact.email && <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>}
          </div>
        </div>

        <div className={styles.bottom} data-reveal>
          <p>© {new Date().getFullYear()} {company.name}</p>
          <p>{text.disclosure}</p>
          <a href="#top">{messages.common.backToTop} <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
