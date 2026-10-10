"use client";

import { processProposals } from "@/config/process";
import { useLanguage } from "@/config/language";
import styles from "./process-section.module.css";

export function ProcessSection() {
  const { language, messages } = useLanguage();
  const text = messages.process;
  const localizedSteps = [
    [text.consultation, text.consultationDescription], [text.planning, text.planningDescription],
    [text.foundation, text.foundationDescription], [text.structure, text.structureDescription],
    [text.finishing, text.finishingDescription], [text.handover, text.handoverDescription],
  ];
  return (
    <section className={styles.process} id="process" aria-labelledby="process-title" lang={language}>
      <div className={styles.inner}>
        <div className={styles.topline} data-reveal>
          <p className={styles.eyebrow}><span>05</span> / {text.eyebrow}</p>
          <p className={styles.proposalNote}>{text.proposal}</p>
        </div>

        <div className={styles.intro} data-reveal>
          <div>
            <p className={styles.kicker}>{text.kicker}</p>
            <h2 className={styles.title} id="process-title">{text.titleStart}<br />{text.titleEnd} <em>{text.titleAccent}</em></h2>
          </div>
          <p className={styles.description}>
            {text.description}
          </p>
        </div>

        <ol className={styles.timeline} aria-label={text.listLabel}>
          {processProposals.map((step, index) => (
            <li className={styles.step} key={step.number} data-reveal data-reveal-delay={index}>
              <span className={styles.marker} aria-hidden="true"><i /></span>
              <span className={styles.number}>{step.number}</span>
              <h3>{localizedSteps[index][0]}</h3>
              <p>{localizedSteps[index][1]}</p>
            </li>
          ))}
        </ol>

        <p className={styles.endNote}><span aria-hidden="true">—</span> {text.endNote}</p>
      </div>
    </section>
  );
}
