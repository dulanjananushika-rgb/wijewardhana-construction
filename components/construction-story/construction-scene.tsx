"use client";

import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { ACESFilmicToneMapping, Color, PerspectiveCamera } from "three";
import { HouseModel } from "./house-model";
import styles from "./construction-story.module.css";

function SceneCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const perspectiveCamera = camera as PerspectiveCamera;
    const compact = size.width < 720;
    perspectiveCamera.position.set(compact ? 11.8 : 13.4, compact ? 12.2 : 10.5, compact ? 22.5 : 17.2);
    perspectiveCamera.fov = compact ? 35 : 32;
    perspectiveCamera.lookAt(0, 3.05, 0);
    perspectiveCamera.updateProjectionMatrix();
  }, [camera, size.width]);

  return null;
}

function ConceptFallback({ activeStage }: { activeStage: number }) {
  return (
    <svg
      className={styles.staticFallback}
      viewBox="0 0 800 620"
      role="img"
      aria-label="Static architectural illustration of the same house concept, shown at the selected construction stage"
    >
      <ellipse cx="404" cy="512" rx="315" ry="54" fill="#b6b1a7" opacity=".45" />
      <path d="m128 442 253-143 300 122-258 149z" fill="#c9c4b7" stroke="#aaa598" strokeWidth="2" />
      {activeStage >= 1 && <path d="m201 421 171-95 207 81-176 99z" fill="#97958c" stroke="#77786f" strokeWidth="2" />}
      {activeStage >= 2 && <g fill="#b4b2aa" stroke="#85847d" strokeWidth="4"><path d="M227 300v123l19 7V310z"/><path d="M370 221v151l18 7V231z"/><path d="M548 294v120l18 8V304z"/><path d="M229 299 391 208l177 76v20L390 230l-161 90z"/></g>}
      {activeStage >= 3 && <g fill="#d7d1c6" stroke="#9b968b" strokeWidth="2"><path d="m249 300 120-67v128l-120 66z"/><path d="m400 232 135 57v124l-135-56z"/><path d="m389 259 134 57v112l-134-56z"/></g>}
      {activeStage >= 4 && <g><path d="m211 288 179-101 201 84-187 103z" fill="#38413d"/><path d="m238 279 151-85 167 70-157 89z" fill="#5e4938" opacity=".7"/></g>}
      {activeStage >= 5 && <g fill="#71827f" stroke="#34413e" strokeWidth="4"><path d="m264 321 70-39v79l-70 39z"/><path d="m411 272 94 40v83l-94-39z"/><path d="m411 284 94 40v69l-94-39z"/></g>}
      {activeStage >= 6 && <g fill="#66795d"><circle cx="171" cy="444" r="27"/><circle cx="615" cy="427" r="31"/><circle cx="650" cy="445" r="18"/></g>}
    </svg>
  );
}

export function ConstructionScene({
  activeStage,
  reducedMotion,
}: {
  activeStage: number;
  reducedMotion: boolean;
}) {
  return (
    <Canvas
      className={styles.canvas}
      frameloop="demand"
      dpr={[1, 1.4]}
      shadows
      camera={{ position: [13.4, 10.5, 17.2], fov: 32, near: 0.1, far: 120 }}
      gl={{ antialias: true, powerPreference: "high-performance", toneMapping: ACESFilmicToneMapping }}
      fallback={<ConceptFallback activeStage={activeStage} />}
      aria-label="Scroll-driven three-dimensional architectural house model"
    >
      <color attach="background" args={[new Color("#d4d1c9")]} />
      <SceneCamera />
      <hemisphereLight args={["#f4f0e5", "#787568", 1.45]} />
      <ambientLight intensity={0.34} />
      <directionalLight
        position={[9, 16, 10]}
        intensity={2.05}
        color="#fff1d8"
        castShadow
        shadow-mapSize-width={1536}
        shadow-mapSize-height={1536}
        shadow-camera-left={-11}
        shadow-camera-right={11}
        shadow-camera-top={12}
        shadow-camera-bottom={-10}
        shadow-bias={-0.00012}
      />
      <directionalLight position={[-10, 8, -8]} intensity={0.62} color="#e4e9e1" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.28, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#d4d1c9" roughness={1} />
      </mesh>
      <ContactShadows position={[0, -0.27, 0]} opacity={0.24} scale={18} blur={2.8} far={9} resolution={512} color="#454942" />
      <HouseModel activeStage={activeStage} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
