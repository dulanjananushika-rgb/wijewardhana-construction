"use client";

import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";

export type HeroVideoSource = {
  src: string;
  type: "video/mp4" | "video/webm";
};

type HeroMediaProps = {
  sources: readonly HeroVideoSource[];
  posterSrc: string;
  videoRef: RefObject<HTMLVideoElement | null>;
  startAtSeconds: number;
  alt: string;
};

/** Responsive, reduced-motion-aware media surface for approved architectural films. */
export function HeroMedia({
  sources,
  posterSrc,
  videoRef,
  startAtSeconds,
  alt,
}: HeroMediaProps) {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [playbackBlocked, setPlaybackBlocked] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const motionAllowedRef = useRef(false);
  const playRequestedRef = useRef(false);

  const requestPlayback = useCallback(async (restart = false) => {
    const video = videoRef.current;
    if (!video) return;

    playRequestedRef.current = true;
    setPlaybackBlocked(false);

    if (video.readyState < HTMLMediaElement.HAVE_METADATA) return;

    if (restart || video.ended) {
      video.currentTime = startAtSeconds;
    }

    try {
      await video.play();
    } catch {
      setPlaybackBlocked(true);
    }
  }, [startAtSeconds, videoRef]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      motionAllowedRef.current = !preference.matches;
      setMotionAllowed(motionAllowedRef.current);
    };
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !motionAllowed) {
      video?.pause();
      return;
    }

    void requestPlayback();
  }, [motionAllowed, requestPlayback, videoRef]);

  return (
    <div className={styles.mediaContent}>
      <video
        ref={videoRef}
        className={styles.mediaVideo}
        autoPlay={motionAllowed}
        muted
        playsInline
        preload="auto"
        poster={posterSrc}
        aria-label={alt}
        onLoadedMetadata={() => {
          if (motionAllowedRef.current || playRequestedRef.current) {
            void requestPlayback();
          }
        }}
        onCanPlay={() => {
          if (motionAllowedRef.current || playRequestedRef.current) {
            void requestPlayback();
          }
        }}
        onPlaying={() => {
          setVideoPlaying(true);
          setPlaybackBlocked(false);
          setHasEnded(false);
        }}
        onPause={() => setVideoPlaying(false)}
        onEnded={() => {
          setVideoPlaying(false);
          setHasEnded(true);
        }}
        onError={() => setPlaybackBlocked(true)}
      >
        {sources.map((source) => (
          <source key={`${source.type}:${source.src}`} src={source.src} type={source.type} />
        ))}
        Your browser does not support embedded video. The architectural concept image remains available above.
      </video>
      {!videoPlaying && !hasEnded && (
        <button
          className={styles.mediaPlay}
          type="button"
          onClick={() => void requestPlayback(true)}
          aria-label="Play the architectural concept film"
        >
          <span aria-hidden="true">▶</span>
          <span>{playbackBlocked ? "RETRY FILM" : hasEnded ? "REPLAY FILM" : "PLAY FILM"}</span>
        </button>
      )}
      <span className={styles.mediaVignette} aria-hidden="true" />
    </div>
  );
}
