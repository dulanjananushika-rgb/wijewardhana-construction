import { company } from "@/config/company";
import styles from "./about-section.module.css";

function HomeStudy() {
  return (
    <svg
      className={styles.homeStudy}
      viewBox="0 0 680 480"
      fill="none"
      role="img"
      aria-labelledby="study-title study-description"
    >
      <title id="study-title">Architectural line study</title>
      <desc id="study-description">
        An abstract line drawing of a contemporary two-storey home, used as an editorial illustration.
      </desc>
      <path className={styles.drawingFine} d="M64 405h554M105 405V214l198-123 270 123v191M105 214h468M303 91v314M303 209h270M303 209l270 196M105 214l198 191" />
      <path className={styles.drawingStrong} d="m75 208 228-141 285 141M92 221h497M119 221v169M576 221v169M119 390h457M153 390V255h116v135M326 242h219v148M326 242v148M414 242v148M326 311h219M153 255l116 135M326 242l219 148" />
      <path className={styles.drawingAccent} d="M153 255h116M326 242h219M414 242v148M269 255v135M545 242v148M326 311h219" />
      <path className={styles.drawingFine} d="M45 421h590M64 414v14m554-14v14M82 447h22m-11-11v22m490-11h22m-11-11v22" />
      <circle className={styles.drawingPoint} cx="303" cy="67" r="3" />
      <circle className={styles.drawingPoint} cx="92" cy="221" r="3" />
      <circle className={styles.drawingPoint} cx="589" cy="221" r="3" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.topline} data-reveal>
          <p className={styles.eyebrow}><span>03</span> / THE PERSON BEHIND THE WORK</p>
          <span className={styles.location}>{company.location}</span>
        </div>

        <div className={styles.editorial}>
          <div className={styles.copy} data-reveal>
            <p className={styles.kicker}>WIJEWARDHANA CONSTRUCTION</p>
            <h2 className={styles.title} id="about-title">
              A home should feel like <em>yours.</em>
            </h2>
            <p className={styles.description}>
              For {company.homeBuildingExperienceYears} years, {company.principalName} has been building homes. The belief behind the work is simple: a home should be planned around the people who live in it, built with care, and finished with attention to detail.
            </p>
            <p className={styles.signature}>{company.principalName}</p>
            <span className={styles.signatureNote}>Building homes · {company.location}</span>
          </div>

          <figure className={styles.figure} data-reveal>
            <span className={styles.drawingLabel}>A HOME, CONSIDERED</span>
            <HomeStudy />
            <figcaption>Every home begins with a clear idea of how it should feel to live there.</figcaption>
            <span className={styles.figureIndex} aria-hidden="true">01 — 03</span>
          </figure>
        </div>

        <div className={styles.contactLine} data-reveal>
          <p>Talk through your home project</p>
          <div className={styles.contactActions}>
            {company.contact.phone && (
              <a href={company.contact.phoneHref}>
                <span>{company.contact.phone}</span><span aria-hidden="true">↗</span>
              </a>
            )}
            {company.contact.whatsapp && (
              <a href={company.contact.whatsapp} target="_blank" rel="noreferrer">
                <span>WhatsApp</span><span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
