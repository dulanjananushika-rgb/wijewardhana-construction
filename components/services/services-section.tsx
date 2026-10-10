"use client";

import { serviceProposals } from "@/config/services";
import { useLanguage } from "@/config/language";
import styles from "./services-section.module.css";

export function ServicesSection() {
  const { language, messages } = useLanguage();
  const text = messages.services;
  const localizedServices = [
    [text.service1, text.service1Description], [text.service2, text.service2Description],
    [text.service3, text.service3Description], [text.service4, text.service4Description],
    [text.service5, text.service5Description], [text.service6, text.service6Description],
  ];
  return (
    <section className={styles.services} id="services" aria-labelledby="services-title" lang={language}>
      <div className={styles.inner}>
        <div className={styles.topline} data-reveal>
          <p className={styles.eyebrow}><span>04</span> / {text.eyebrow}</p>
          <p className={styles.proposalNote}>{text.proposal}</p>
        </div>

        <div className={styles.content}>
          <header className={styles.intro} data-reveal>
            <p className={styles.kicker}>{text.kicker}</p>
            <h2 className={styles.title} id="services-title">
              {text.titleStart}<br />{text.titleEnd} <em>{text.titleAccent}</em>
            </h2>
            <p className={styles.description}>
              {text.description}
            </p>
          </header>

          <ol className={styles.serviceList} aria-label={text.listLabel}>
            {serviceProposals.map((service, index) => (
              <li className={styles.service} key={service.number} data-reveal data-reveal-delay={index}>
                <span className={styles.number}>{service.number}</span>
                <h3>{localizedServices[index][0]}</h3>
                <p>{localizedServices[index][1]}</p>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
