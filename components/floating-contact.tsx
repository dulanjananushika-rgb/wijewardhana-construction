"use client";

import { useEffect, useState } from "react";
import { company } from "@/config/company";
import { useLanguage } from "@/config/language";
import styles from "./floating-contact.module.css";

export function FloatingContact() {
  const { language, messages } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [contactIsInView, setContactIsInView] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.55 && !contactIsInView);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [contactIsInView]);

  useEffect(() => {
    const contactSection = document.querySelector<HTMLElement>("#contact");
    if (!contactSection || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setContactIsInView(entry.isIntersecting),
      { rootMargin: "-12% 0px -12% 0px", threshold: 0 },
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  if (!company.contact.whatsapp) return null;

  return (
    <a
      className={`${styles.contact}${isVisible ? ` ${styles.visible}` : ""}`}
      href={company.contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={language === "si"
        ? `${company.name} සමඟ WhatsApp හරහා කතා කරන්න. දුරකථන අංකය ${company.contact.phone ?? "සකස් කළ අංකය"}`
        : `Chat with ${company.name} on WhatsApp at ${company.contact.phone ?? "the configured number"}`}
      title={messages.common.whatsapp}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
        <path d="M16.02 3.25c-7.04 0-12.76 5.7-12.76 12.72 0 2.24.59 4.43 1.7 6.36L3.16 28.8l6.64-1.74a12.8 12.8 0 0 0 6.21 1.59h.01c7.04 0 12.76-5.7 12.77-12.71a12.64 12.64 0 0 0-3.74-9.01 12.7 12.7 0 0 0-9.03-3.68Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
        <path d="M12.23 9.1c-.28-.63-.58-.64-.85-.65h-.73c-.25 0-.67.1-1.02.49-.35.39-1.34 1.3-1.34 3.18 0 1.87 1.37 3.68 1.56 3.93.2.25 2.64 4.2 6.53 5.71 3.23 1.25 3.89 1 4.6.94.7-.06 2.28-.94 2.6-1.84.32-.9.32-1.66.22-1.82-.1-.16-.35-.25-.73-.44-.39-.2-2.28-1.13-2.64-1.26-.35-.13-.61-.2-.87.2-.26.38-1 1.25-1.22 1.51-.23.26-.45.3-.84.1-.38-.2-1.62-.6-3.09-1.9-1.14-1.02-1.91-2.28-2.14-2.67-.22-.38-.02-.59.17-.78.17-.17.39-.45.58-.67.2-.23.26-.39.39-.64.13-.26.06-.48-.03-.67-.1-.2-.85-2.06-1.15-2.81Z" fill="currentColor" />
      </svg>
    </a>
  );
}
