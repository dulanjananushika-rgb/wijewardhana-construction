import { serviceProposals } from "@/config/services";
import styles from "./services-section.module.css";

export function ServicesSection() {
  return (
    <section className={styles.services} id="services" aria-labelledby="services-title">
      <div className={styles.inner}>
        <div className={styles.topline} data-reveal>
          <p className={styles.eyebrow}><span>04</span> / HOW WE CAN HELP</p>
          <p className={styles.proposalNote}>PROPOSED SERVICES · FOR REVIEW</p>
        </div>

        <div className={styles.content}>
          <header className={styles.intro} data-reveal>
            <p className={styles.kicker}>FROM THE FIRST PLAN TO THE LAST DETAIL</p>
            <h2 className={styles.title} id="services-title">
              One home.<br />Many ways <em>forward.</em>
            </h2>
            <p className={styles.description}>
              Explore the types of residential building work Wijewardhana Construction may offer. These categories are proposals and should be confirmed before they are published as services.
            </p>
          </header>

          <ol className={styles.serviceList} aria-label="Proposed residential construction services">
            {serviceProposals.map((service, index) => (
              <li className={styles.service} key={service.number} data-reveal data-reveal-delay={index}>
                <span className={styles.number}>{service.number}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
