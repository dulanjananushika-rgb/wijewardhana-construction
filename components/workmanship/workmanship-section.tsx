import { workmanshipProposals } from "@/config/workmanship";
import styles from "./workmanship-section.module.css";

export function WorkmanshipSection() {
  return (
    <section className={styles.workmanship} id="principles" aria-labelledby="principles-title">
      <div className={styles.inner}>
        <div className={styles.topline} data-reveal>
          <p className={styles.eyebrow}><span>06</span> / WORKMANSHIP PRINCIPLES</p>
          <p className={styles.disclosure}>PROPOSED PRINCIPLES · FOR REVIEW</p>
        </div>

        <div className={styles.editorial}>
          <header className={styles.intro} data-reveal>
            <p className={styles.kicker}>THE THOUGHT BEHIND THE BUILD</p>
            <h2 className={styles.title} id="principles-title">Good work is felt in the <em>details.</em></h2>
            <p className={styles.lead}>
              A home takes shape through hundreds of decisions. These proposed principles offer a way to think about each one.
            </p>
          </header>

          <ol className={styles.principles} aria-label="Proposed workmanship principles">
            {workmanshipProposals.map((principle, index) => (
              <li className={styles.principle} key={principle.number} data-reveal data-reveal-delay={index}>
                <span className={styles.number}>{principle.number}</span>
                <div className={styles.principleCopy}>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
                <span className={styles.marker}>{principle.marker}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
