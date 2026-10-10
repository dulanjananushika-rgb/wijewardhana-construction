import { SiteNavbar } from "@/components/site-navbar";
import { CinematicHero } from "@/components/hero/cinematic-hero";
import { ConstructionStory } from "@/components/construction-story/construction-story";
import { AboutSection } from "@/components/about/about-section";
import { ServicesSection } from "@/components/services/services-section";
import { ProcessSection } from "@/components/process/process-section";
import { WorkmanshipSection } from "@/components/workmanship/workmanship-section";
import { ContactSection } from "@/components/contact/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import { ScrollMotion } from "@/components/scroll-motion";
import { LanguageSkipLink } from "@/components/language-skip-link";

export default function Home() {
  return (
    <div className="foundation-shell" id="top">
      <ScrollMotion>
        <SiteNavbar />
        <LanguageSkipLink />
        <main className="hero-shell" id="main-content" tabIndex={-1}>
          <CinematicHero />
          <ConstructionStory />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <WorkmanshipSection />
          <ContactSection />
        </main>
        <SiteFooter />
        <FloatingContact />
      </ScrollMotion>
    </div>
  );
}
