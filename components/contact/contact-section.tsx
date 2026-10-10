"use client";

import type { FormEvent } from "react";
import { company } from "@/config/company";
import { useLanguage } from "@/config/language";
import styles from "./contact-section.module.css";

export function ContactSection() {
  const { language, messages } = useLanguage();
  const text = messages.contact;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!company.contact.whatsapp) return;

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();
    const message = [
      text.messageIntro.replace("{name}", company.principalName),
      `${text.messageName}: ${name}`,
      `${text.messagePhone}: ${phone}`,
      project ? `${text.messageProject}: ${project}` : "",
    ].filter(Boolean).join("\n");

    const chatUrl = new URL(company.contact.whatsapp);
    chatUrl.searchParams.set("text", message);
    const whatsappWindow = window.open(chatUrl.toString(), "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;
    else window.location.assign(chatUrl.toString());
  };

  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title" lang={language}>
      <div className={styles.inner}>
        <div className={styles.topline} data-reveal>
          <p className={styles.eyebrow}><span>07</span> / {text.eyebrow}</p>
          <span className={styles.location}>{messages.common.location}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.invitation} data-reveal>
            <p className={styles.kicker}>{text.kicker}</p>
            <h2 className={styles.title} id="contact-title">{text.titleStart} <em>{text.titleAccent}</em></h2>
            <p className={styles.description}>
              {text.description}
            </p>

            <div className={styles.directContact}>
              <span>{text.direct}</span>
              <a href={company.contact.phoneHref}>{company.contact.phone}<span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} data-reveal>
            <div className={styles.field}>
              <label htmlFor="contact-name">{text.name} <span aria-hidden="true">*</span></label>
              <input id="contact-name" name="name" autoComplete="name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-phone">{text.phone} <span aria-hidden="true">*</span></label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div className={`${styles.field} ${styles.messageField}`}>
              <label htmlFor="contact-project">{text.project} <span>{text.optional}</span></label>
              <textarea id="contact-project" name="project" rows={3} />
            </div>
            <button className={styles.submit} type="submit" disabled={!company.contact.whatsapp}>
              <span>{text.submit}</span><span aria-hidden="true">↗</span>
            </button>
            <p className={styles.formNote}>
              {company.contact.whatsapp
                ? text.whatsappReady
                : text.whatsappMissing}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
