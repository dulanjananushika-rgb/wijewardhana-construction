"use client";

import { workmanshipProposals } from "@/config/workmanship";
import { useLanguage } from "@/config/language";
import styles from "./workmanship-section.module.css";

export function WorkmanshipSection() {
  const { language, messages } = useLanguage();
  const text = messages.principles;
  const localizedPrinciples = [
    [text.planTitle, text.planDescription, text.planMarker],
    [text.structureTitle, text.structureDescription, text.structureMarker],
    [text.detailTitle, text.detailDescription, text.detailMarker],
  ];
  return (
    <section className={styles.workmanship} id="principles" aria-labelledby="principles-title" lang={language}>
      <div className={styles.inner}>
        <div className={styles.topline} data-reveal>
          <p className={styles.eyebrow}><span>06</span> / {text.eyebrow}</p>
          <p className={styles.disclosure}>{text.proposal}</p>
        </div>

        <div className={styles.editorial}>
          <header className={styles.intro} data-reveal>
            <p className={styles.kicker}>{text.kicker}</p>
            <h2 className={styles.title} id="principles-title">{text.titleStart} <em>{text.titleAccent}</em></h2>
            <p className={styles.lead}>
              {text.lead}
            </p>
          </header>

          <ol className={styles.principles} aria-label={text.listLabel}>
            {workmanshipProposals.map((principle, index) => (
              <li className={styles.principle} key={principle.number} data-reveal data-reveal-delay={index}>
                <span className={styles.number}>{principle.number}</span>
                <div className={styles.principleCopy}>
                  <h3>{localizedPrinciples[index][0]}</h3>
                  <p>{localizedPrinciples[index][1]}</p>
                </div>
                <span className={styles.marker}>{localizedPrinciples[index][2]}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
