import { company } from "@/config/company";
import styles from "./site-footer.module.css";

const footerLinks = [
  { label: "Overview", href: "#overview" },
  { label: "The build", href: "#construction-story" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.identity} data-reveal>
            <a className={styles.brand} href="#top" aria-label={`${company.name}, back to top`}>
              <svg aria-hidden="true" viewBox="0 0 42 42" fill="none">
                <path d="M5 35V16.5L21 6l16 10.5V35M12 35V21h18v14M5 35h32M21 21v14M2 39h38" />
              </svg>
              <span>{company.name}</span>
            </a>
            <p>Thoughtful homes, from the first plan to the finishing details.</p>
          </div>

          <nav className={styles.navigation} aria-label="Footer navigation" data-reveal>
            <h2>EXPLORE</h2>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <div className={styles.contact} data-reveal>
            <h2>GET IN TOUCH</h2>
            <p>{company.location}</p>
            {company.contact.phone && (
              <a href={company.contact.phoneHref}>{company.contact.phone}</a>
            )}
            {company.contact.whatsapp && (
              <a href={company.contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
            )}
            {company.contact.email && <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>}
          </div>
        </div>

        <div className={styles.bottom} data-reveal>
          <p>© {new Date().getFullYear()} {company.name}</p>
          <p>Architectural films and digital models are concept visualizations, not completed company projects.</p>
          <a href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
