"use client";

import { useRef, useState } from "react";
import { company } from "@/config/company";
import { useLanguage } from "@/config/language";
import { heroMedia } from "@/config/hero";
import { HeroMedia } from "./hero-media";
import styles from "./hero.module.css";

export function CinematicHero() {
  const { language, messages } = useLanguage();
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
    <section className={styles.hero} id="overview" aria-labelledby="hero-title" lang={language}>
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowMark} aria-hidden="true" />
            <span>{messages.hero.eyebrow}</span>
            <span className={styles.location}>{language === "si" ? "කුරුණෑගල, ශ්‍රී ලංකාව" : company.location.toUpperCase()}</span>
          </p>

          <h1 className={styles.title} id="hero-title">
            <span>{messages.hero.line1}</span>
            <span>{messages.hero.line2}</span>
            <span className={styles.titleHome}>{messages.hero.line3}</span>
          </h1>

          <p className={styles.description}>{messages.hero.description}</p>

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
                <span>{messages.hero.primary}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <span className={styles.actionNote} id="hero-contact-note">
                {company.contact.whatsapp
                  ? messages.hero.contactNote.replace("{phone}", company.contact.phone ?? "us")
                  : messages.hero.missingContact}
              </span>
            </div>
            <button className={styles.actionText} type="button" onClick={replayReveal}>
              {messages.hero.secondary}
              <span aria-hidden="true">↻</span>
            </button>
          </div>

          <div className={styles.copyFooter}>
            <a className={styles.scrollCue} href="#hero-film" aria-label={messages.hero.scrollLabel}>
              <span className={styles.scrollMark} aria-hidden="true"><span /></span>
              <span>{messages.hero.scroll}</span>
            </a>
            <span className={styles.chapter}>01 <i aria-hidden="true">/</i> 02</span>
          </div>
        </div>

        <figure className={styles.visual} id="hero-film" aria-labelledby="hero-visual-caption">
          <div className={styles.sceneStage} lang={language}>
            <HeroMedia
              key={activeFilm.id}
              sources={activeFilm.sources}
              posterSrc={activeFilm.posterSrc}
              videoRef={videoRef}
              startAtSeconds={activeFilm.startAtSeconds}
              alt={activeFilmIndex === 0 ? messages.hero.blueAlt : messages.hero.daylightAlt}
              labels={{
                fallback: messages.hero.mediaFallback,
                play: messages.hero.play,
                retry: messages.hero.retry,
                replay: messages.hero.replay,
                playLabel: messages.hero.playLabel,
              }}
            />
            <div className={styles.filmSelector} role="group" aria-label={messages.hero.selectorLabel}>
              {heroMedia.films.map((film, index) => (
                <button
                  key={film.id}
                  className={styles.filmSelectorButton}
                  type="button"
                  aria-pressed={activeFilmIndex === index}
                  onClick={() => setActiveFilmIndex(index)}
                >
                  <span className={styles.filmNumber}>0{index + 1}</span>
                  <span>{index === 0 ? messages.hero.blueHour : messages.hero.daylight}</span>
                </button>
              ))}
            </div>
          </div>
          <figcaption className={styles.visualCaption} id="hero-visual-caption">
            <span>{activeFilmIndex === 0 ? messages.hero.blueTitle : messages.hero.daylightTitle}</span>
            <span>{messages.hero.conceptFilm}</span>
          </figcaption>
        </figure>
      </div>

    </section>
  );
}
