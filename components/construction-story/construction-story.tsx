"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { constructionStory } from "@/config/construction-story";
import styles from "./construction-story.module.css";

const ConstructionScene = dynamic(
  () => import("./construction-scene").then((module) => module.ConstructionScene),
  {
    ssr: false,
    loading: () => <div className={styles.sceneLoading} aria-hidden="true" />,
  },
);

export function ConstructionStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeStage, setActiveStage] = useState(0);
  const [shouldLoadScene, setShouldLoadScene] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoadScene(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadScene(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const observedStages = stageRefs.current.filter(
      (stage): stage is HTMLElement => stage !== null,
    );
    if (!observedStages.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top + a.boundingClientRect.height / 2 - window.innerHeight / 2) -
              Math.abs(b.boundingClientRect.top + b.boundingClientRect.height / 2 - window.innerHeight / 2),
          )[0];

        if (!current) return;
        const nextIndex = observedStages.indexOf(current.target as HTMLElement);
        if (nextIndex >= 0) setActiveStage(nextIndex);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    observedStages.forEach((stage) => observer.observe(stage));
    return () => observer.disconnect();
  }, []);

  const currentStage = constructionStory.stages[activeStage];

  return (
    <section
      ref={sectionRef}
      className={styles.story}
      id="construction-story"
      aria-labelledby="story-title"
    >
      <div className={styles.inner}>
        <div className={styles.topline}>
          <p className={styles.eyebrow}><span>02</span> / THE CONSTRUCTION STORY</p>
          <span className={styles.toplineNote}>{constructionStory.label}</span>
        </div>

        <header className={styles.intro}>
          <h2 className={styles.title} id="story-title">
            A home takes <em>shape.</em>
          </h2>
          <div className={styles.introCopy}>
            <p className={styles.description}>{constructionStory.introduction}</p>
            <span className={styles.scrollPrompt}>{constructionStory.scrollCue}<i aria-hidden="true">↓</i></span>
          </div>
        </header>

        <div className={styles.storyGrid}>
          <aside className={styles.sceneColumn} aria-label="Interactive house concept model">
            <div className={styles.sceneFrame}>
              <div className={styles.sceneTopline} aria-hidden="true">
                <span>WIJEWARDHANA / STUDY 01</span>
                <span>{currentStage.number} — 06</span>
              </div>
              <div className={styles.sceneViewport}>
                {shouldLoadScene ? (
                  <ConstructionScene activeStage={activeStage} reducedMotion={reducedMotion} />
                ) : (
                  <div className={styles.sceneLoading} aria-hidden="true" />
                )}
              </div>
              <div className={styles.sceneReadout} aria-live="polite">
                <span className={styles.readoutNumber}>{currentStage.number}</span>
                <span className={styles.readoutCopy}>
                  <span>{currentStage.label}</span>
                  <span>{currentStage.title}</span>
                </span>
                <span className={styles.readoutType}>CONCEPT MODEL</span>
              </div>
              <div
                className={styles.progressTrack}
                role="progressbar"
                aria-label="House construction stages"
                aria-valuemin={0}
                aria-valuemax={6}
                aria-valuenow={activeStage}
                aria-valuetext={`Stage ${currentStage.number}: ${currentStage.label}`}
              >
                <span style={{ transform: `scaleX(${activeStage / 6})` }} />
              </div>
            </div>
            <p className={styles.disclosure}>{constructionStory.disclosure}</p>
          </aside>

          <div className={styles.stages} aria-label="Construction stages">
            {constructionStory.stages.map((stage, index) => (
              <article
                className={styles.stage}
                key={stage.key}
                ref={(element) => { stageRefs.current[index] = element; }}
                aria-current={activeStage === index ? "step" : undefined}
                data-active={activeStage === index}
              >
                <p className={styles.stageKicker}>
                  <span>{stage.number}</span>
                  <span>{stage.label}</span>
                </p>
                <h3>{stage.title}</h3>
                <p className={styles.stageDescription}>{stage.description}</p>
                <span className={styles.stageMarker} aria-hidden="true">↘</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
