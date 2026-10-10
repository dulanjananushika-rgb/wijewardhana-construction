import type { ReactNode } from "react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { MathUtils } from "three";
import type { Group } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

export type Vec3 = [number, number, number];

export type Surface =
  | "site"
  | "soil"
  | "concrete"
  | "brick"
  | "plaster"
  | "stone"
  | "timber"
  | "metal"
  | "glass"
  | "leaf"
  | "path";

const surfaceStyles: Record<Surface, { color: string; roughness: number; metalness?: number; opacity?: number; transparent?: boolean; emissive?: string; emissiveIntensity?: number }> = {
  site: { color: "#c9c4b7", roughness: 0.94 },
  soil: { color: "#766956", roughness: 1 },
  concrete: { color: "#aaa79d", roughness: 0.9 },
  brick: { color: "#9a6048", roughness: 0.88 },
  plaster: { color: "#e3ded3", roughness: 0.8 },
  stone: { color: "#686d66", roughness: 0.92 },
  timber: { color: "#79583f", roughness: 0.78 },
  metal: { color: "#343d39", roughness: 0.32, metalness: 0.62 },
  glass: { color: "#91a3a0", roughness: 0.2, metalness: 0.26, opacity: 0.48, transparent: true },
  leaf: { color: "#66795d", roughness: 0.95 },
  path: { color: "#c0b8a7", roughness: 0.94 },
};

export function Block({
  position,
  size,
  surface,
  radius = 0.025,
  castShadow = true,
  receiveShadow = true,
}: {
  position: Vec3;
  size: Vec3;
  surface: Surface;
  radius?: number;
  castShadow?: boolean;
  receiveShadow?: boolean;
}) {
  const style = surfaceStyles[surface];

  return (
    <RoundedBox
      args={size}
      radius={Math.min(radius, Math.min(...size) / 3)}
      smoothness={2}
      position={position}
      castShadow={castShadow}
      receiveShadow={receiveShadow}
    >
      <meshStandardMaterial {...style} />
    </RoundedBox>
  );
}

export function BuildLayer({
  show,
  reducedMotion,
  children,
}: {
  show: boolean;
  reducedMotion: boolean;
  children: ReactNode;
}) {
  const groupRef = useRef<Group>(null);
  const showRef = useRef(show);
  const reducedMotionRef = useRef(reducedMotion);
  const invalidate = useThree((state) => state.invalidate);
  showRef.current = show;
  reducedMotionRef.current = reducedMotion;

  useLayoutEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    group.visible = showRef.current;
    group.scale.y = reducedMotionRef.current ? Number(showRef.current) : 0;
  }, []);

  useEffect(() => {
    invalidate();
  }, [show, reducedMotion, invalidate]);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    if (reducedMotionRef.current) {
      group.scale.y = Number(showRef.current);
      group.visible = showRef.current;
      return;
    }

    if (showRef.current) group.visible = true;
    const targetScale = Number(showRef.current);
    group.scale.y = MathUtils.damp(group.scale.y, targetScale, 5.5, delta);
    if (Math.abs(group.scale.y - targetScale) > 0.001) state.invalidate();
    if (!showRef.current && group.scale.y < 0.006) group.visible = false;
  });

  return <group ref={groupRef}>{children}</group>;
}

export function WindowUnit({
  center,
  width,
  height,
  z,
  mullions = 2,
}: {
  center: Vec3;
  width: number;
  height: number;
  z: number;
  mullions?: number;
}) {
  const frame = 0.085;
  const yTop = center[1] + height / 2;
  const yBottom = center[1] - height / 2;

  return (
    <group>
      <Block position={[center[0], center[1], z]} size={[width - frame, height - frame, 0.055]} surface="glass" radius={0.012} castShadow={false} />
      <Block position={[center[0] - width / 2 + frame / 2, center[1], z + 0.045]} size={[frame, height, 0.085]} surface="metal" />
      <Block position={[center[0] + width / 2 - frame / 2, center[1], z + 0.045]} size={[frame, height, 0.085]} surface="metal" />
      <Block position={[center[0], yTop - frame / 2, z + 0.045]} size={[width, frame, 0.085]} surface="metal" />
      <Block position={[center[0], yBottom + frame / 2, z + 0.045]} size={[width, frame, 0.085]} surface="metal" />
      {Array.from({ length: mullions }, (_, index) => {
        const x = center[0] - width / 2 + (width / (mullions + 1)) * (index + 1);
        return <Block key={x} position={[x, center[1], z + 0.05]} size={[0.045, height - frame, 0.06]} surface="metal" radius={0.012} />;
      })}
      <Block position={[center[0], center[1] - 0.015, z - 0.03]} size={[width - 0.2, 0.035, 0.035]} surface="metal" radius={0.008} />
    </group>
  );
}

export function PlantCluster({ position, scale = 1 }: { position: Vec3; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.34, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.12, 0.72, 7]} />
        <meshStandardMaterial color="#5c5443" roughness={0.92} />
      </mesh>
      {Array.from({ length: 7 }, (_, index) => {
        const angle = (index / 7) * Math.PI * 2;
        const x = Math.cos(angle) * 0.32;
        const z = Math.sin(angle) * 0.32;
        return (
          <mesh
            key={index}
            position={[x, 0.73 + (index % 3) * 0.055, z]}
            rotation={[Math.cos(angle) * -0.48, angle, Math.sin(angle) * 0.48]}
            castShadow
          >
            <coneGeometry args={[0.16, 0.78, 5]} />
            <meshStandardMaterial color={index % 2 ? "#687b60" : "#82906e"} roughness={0.95} />
          </mesh>
        );
      })}
    </group>
  );
}
