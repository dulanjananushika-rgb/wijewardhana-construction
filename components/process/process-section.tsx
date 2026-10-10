import { processProposals } from "@/config/process";
import styles from "./process-section.module.css";

export function ProcessSection() {
  return (
    <section className={styles.process} id="process" aria-labelledby="process-title">
      <div className={styles.inner}>
        <div className={styles.topline} data-reveal>
          <p className={styles.eyebrow}><span>05</span> / THE WAY FORWARD</p>
          <p className={styles.proposalNote}>SUGGESTED CUSTOMER JOURNEY · FOR REVIEW</p>
        </div>

        <div className={styles.intro} data-reveal>
          <div>
            <p className={styles.kicker}>A HOME, STEP BY STEP</p>
            <h2 className={styles.title} id="process-title">From first conversation<br />to <em>coming home.</em></h2>
          </div>
          <p className={styles.description}>
            A considered home project moves through clear decisions and stages of work. This suggested sequence is here for discussion and should be confirmed with the company.
          </p>
        </div>

        <ol className={styles.timeline} aria-label="Suggested home construction process">
          {processProposals.map((step, index) => (
            <li className={styles.step} key={step.number} data-reveal data-reveal-delay={index}>
              <span className={styles.marker} aria-hidden="true"><i /></span>
              <span className={styles.number}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <p className={styles.endNote}><span aria-hidden="true">—</span> THE BEGINNING OF SOMETHING THAT'S YOURS</p>
      </div>
    </section>
  );
}
