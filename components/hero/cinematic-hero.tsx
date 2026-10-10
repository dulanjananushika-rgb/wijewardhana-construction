"use client";

import { useRef, useState } from "react";
import { company } from "@/config/company";
import { heroContent, heroMedia } from "@/config/hero";
import { HeroMedia } from "./hero-media";
import styles from "./hero.module.css";

export function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeFilmIndex, setActiveFilmIndex] = useState(0);
  const activeFilm = heroMedia.films[activeFilmIndex];

  const replayReveal = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = activeFilm.startAtSeconds;
    void video.play().catch(() => undefined);
  };

  return (
    <section className={styles.hero} id="overview" aria-labelledby="hero-title">
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowMark} aria-hidden="true" />
            <span>{heroContent.eyebrow}</span>
            <span className={styles.location}>{company.location.toUpperCase()}</span>
          </p>

          <h1 className={styles.title} id="hero-title">
            <span>FROM FOUNDATION.</span>
            <span>TO YOUR</span>
            <span className={styles.titleHome}>DREAM HOME.</span>
          </h1>

          <p className={styles.description}>{heroContent.description}</p>

          <div className={styles.actions}>
            <div className={styles.actionGroup}>
              <a
                className={`${styles.action} ${styles.actionPrimary}`}
                href={company.contact.whatsapp ?? undefined}
                target={company.contact.whatsapp ? "_blank" : undefined}
                rel={company.contact.whatsapp ? "noreferrer" : undefined}
                aria-disabled={!company.contact.whatsapp}
                aria-describedby="hero-contact-note"
              >
                <span>{heroContent.primaryAction}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <span className={styles.actionNote} id="hero-contact-note">
                {company.contact.whatsapp
                  ? `Message ${company.contact.phone ?? "us"} on WhatsApp.`
                  : "Contact details are not configured yet."}
              </span>
            </div>
            <button className={styles.actionText} type="button" onClick={replayReveal}>
              {heroContent.secondaryAction}
              <span aria-hidden="true">↻</span>
            </button>
          </div>

          <div className={styles.copyFooter}>
            <a className={styles.scrollCue} href="#hero-film" aria-label="View the architectural concept film">
              <span className={styles.scrollMark} aria-hidden="true"><span /></span>
              <span>{heroContent.scrollCue}</span>
            </a>
            <span className={styles.chapter}>01 <i aria-hidden="true">/</i> 02</span>
          </div>
        </div>

        <figure className={styles.visual} id="hero-film" aria-labelledby="hero-visual-caption">
          <div className={styles.sceneStage}>
            <HeroMedia
              key={activeFilm.id}
              sources={activeFilm.sources}
              posterSrc={activeFilm.posterSrc}
              videoRef={videoRef}
              startAtSeconds={activeFilm.startAtSeconds}
              alt={activeFilm.visualAlt}
            />
            <div className={styles.filmSelector} role="group" aria-label="Select an architectural concept film">
              {heroMedia.films.map((film, index) => (
                <button
                  key={film.id}
                  className={styles.filmSelectorButton}
                  type="button"
                  aria-pressed={activeFilmIndex === index}
                  onClick={() => setActiveFilmIndex(index)}
                >
                  <span className={styles.filmNumber}>0{index + 1}</span>
                  <span>{film.selectorLabel}</span>
                </button>
              ))}
            </div>
          </div>
          <figcaption className={styles.visualCaption} id="hero-visual-caption">
            <span>{activeFilm.visualTitle}</span>
            <span>{activeFilm.visualLabel}</span>
          </figcaption>
        </figure>
      </div>

    </section>
  );
}
