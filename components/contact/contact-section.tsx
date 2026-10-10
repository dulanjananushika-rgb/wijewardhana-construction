"use client";

import type { FormEvent } from "react";
import { company } from "@/config/company";
import styles from "./contact-section.module.css";

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!company.contact.whatsapp) return;

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();
    const message = [
      `Hello ${company.principalName}, I would like to discuss a home project.`,
      `Name: ${name}`,
      `Contact number: ${phone}`,
      project ? `Project details: ${project}` : "",
    ].filter(Boolean).join("\n");

    const chatUrl = new URL(company.contact.whatsapp);
    chatUrl.searchParams.set("text", message);
    const whatsappWindow = window.open(chatUrl.toString(), "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;
    else window.location.assign(chatUrl.toString());
  };

  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.inner}>
        <div className={styles.topline} data-reveal>
          <p className={styles.eyebrow}><span>07</span> / START A CONVERSATION</p>
          <span className={styles.location}>{company.location}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.invitation} data-reveal>
            <p className={styles.kicker}>TELL US WHAT YOU HAVE IN MIND</p>
            <h2 className={styles.title} id="contact-title">Let's talk about the place you'll <em>call home.</em></h2>
            <p className={styles.description}>
              Share a little about your plans. Your message will open in WhatsApp, where you can review and send it.
            </p>

            <div className={styles.directContact}>
              <span>CALL DIRECTLY</span>
              <a href={company.contact.phoneHref}>{company.contact.phone}<span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} data-reveal>
            <div className={styles.field}>
              <label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label>
              <input id="contact-name" name="name" autoComplete="name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-phone">Your contact number <span aria-hidden="true">*</span></label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div className={`${styles.field} ${styles.messageField}`}>
              <label htmlFor="contact-project">A little about your project <span>(optional)</span></label>
              <textarea id="contact-project" name="project" rows={3} />
            </div>
            <button className={styles.submit} type="submit" disabled={!company.contact.whatsapp}>
              <span>CONTINUE IN WHATSAPP</span><span aria-hidden="true">↗</span>
            </button>
            <p className={styles.formNote}>
              {company.contact.whatsapp
                ? "WhatsApp opens with your message ready for you to review and send."
                : "WhatsApp contact is not configured yet."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
