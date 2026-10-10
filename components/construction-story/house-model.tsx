import { Line } from "@react-three/drei";
import { Block, BuildLayer, PlantCluster, WindowUnit } from "./building-elements";

function PlanningLayout({ activeStage, reducedMotion }: { activeStage: number; reducedMotion: boolean }) {
  return (
    <BuildLayer show={activeStage === 0} reducedMotion={reducedMotion}>
      <group position={[0, 0.025, 0]}>
        <Line points={[[-4.65, 0, -3.45], [4.65, 0, -3.45], [4.65, 0, 3.45], [-4.65, 0, 3.45], [-4.65, 0, -3.45]]} color="#927c61" lineWidth={1.1} />
        <Line points={[[-4.65, 0, 0], [4.65, 0, 0]]} color="#b8a78f" lineWidth={0.7} />
        <Line points={[[0, 0, -3.45], [0, 0, 3.45]]} color="#b8a78f" lineWidth={0.7} />
        <Line points={[[-5.2, 0, -3.95], [5.2, 0, -3.95]]} color="#c1b8a8" lineWidth={0.55} dashed dashSize={0.2} gapSize={0.12} />
        <Line points={[[0, 0, -4.5], [0, 0, 4.5]]} color="#c1b8a8" lineWidth={0.55} dashed dashSize={0.2} gapSize={0.12} />
      </group>
    </BuildLayer>
  );
}

function Foundation({ activeStage, reducedMotion }: { activeStage: number; reducedMotion: boolean }) {
  const grid = [-3.8, 0, 3.8];

  return (
    <BuildLayer show={activeStage >= 1} reducedMotion={reducedMotion}>
      {grid.flatMap((x) => grid.map((z) => (
        <Block key={`${x}:${z}`} position={[x, 0.28, z]} size={[1.05, 0.48, 0.95]} surface="concrete" radius={0.045} />
      )))}
      <Block position={[0, 0.58, -3.2]} size={[8.25, 0.3, 0.3]} surface="concrete" />
      <Block position={[0, 0.58, 3.2]} size={[8.25, 0.3, 0.3]} surface="concrete" />
      <Block position={[-4, 0.58, 0]} size={[0.3, 0.3, 6.1]} surface="concrete" />
      <Block position={[4, 0.58, 0]} size={[0.3, 0.3, 6.1]} surface="concrete" />
      <Block position={[0, 0.8, 0]} size={[8.3, 0.18, 6.25]} surface="concrete" radius={0.04} />
    </BuildLayer>
  );
}

function ConcreteFrame({ activeStage, reducedMotion }: { activeStage: number; reducedMotion: boolean }) {
  const groundColumns = [-3.85, 0, 3.85].flatMap((x) => [-2.85, 2.85].map((z) => [x, z] as const));
  const upperColumns = [-2.85, 0.65, 3.35].flatMap((x) => [-2.25, 2.25].map((z) => [x, z] as const));

  return (
    <BuildLayer show={activeStage >= 2} reducedMotion={reducedMotion}>
      {groundColumns.map(([x, z]) => (
        <Block key={`g:${x}:${z}`} position={[x, 2.36, z]} size={[0.32, 2.98, 0.32]} surface="concrete" radius={0.035} />
      ))}
      <Block position={[0, 3.82, 0]} size={[8.8, 0.24, 6.65]} surface="concrete" radius={0.04} />
      <Block position={[0, 3.65, -3.17]} size={[8.45, 0.28, 0.3]} surface="concrete" />
      <Block position={[0, 3.65, 3.17]} size={[8.45, 0.28, 0.3]} surface="concrete" />
      <Block position={[-4.08, 3.65, 0]} size={[0.3, 0.28, 6.05]} surface="concrete" />
      <Block position={[4.08, 3.65, 0]} size={[0.3, 0.28, 6.05]} surface="concrete" />

      {upperColumns.map(([x, z]) => (
        <Block key={`u:${x}:${z}`} position={[x, 5.32, z]} size={[0.3, 2.72, 0.3]} surface="concrete" radius={0.03} />
      ))}
      <Block position={[0.35, 3.99, 0]} size={[7.45, 0.18, 5.55]} surface="concrete" />
      <Block position={[0.35, 6.72, -2.56]} size={[7.3, 0.24, 0.3]} surface="concrete" />
      <Block position={[0.35, 6.72, 2.56]} size={[7.3, 0.24, 0.3]} surface="concrete" />
      <Block position={[-3.25, 6.72, 0]} size={[0.3, 0.24, 5.35]} surface="concrete" />
      <Block position={[3.95, 6.72, 0]} size={[0.3, 0.24, 5.35]} surface="concrete" />

      <Block position={[2.45, 4.08, 3.34]} size={[3.3, 0.16, 1.65]} surface="concrete" radius={0.025} />
    </BuildLayer>
  );
}

function WallSet({ surface }: { surface: "brick" | "plaster" }) {
  const lowerY = 2.34;
  const upperY = 5.34;
  const lowerHeight = 2.62;
  const upperHeight = 2.5;

  return (
    <>
      <Block position={[-4.24, lowerY, 0]} size={[0.22, lowerHeight, 6.15]} surface={surface} />
      <Block position={[4.24, lowerY, 0]} size={[0.22, lowerHeight, 6.15]} surface={surface} />
      <Block position={[0, lowerY, -3.1]} size={[8.25, lowerHeight, 0.22]} surface={surface} />
      <Block position={[-4.02, lowerY, 3.12]} size={[0.42, lowerHeight, 0.2]} surface={surface} />
      <Block position={[-1.4, lowerY, 3.12]} size={[0.45, lowerHeight, 0.2]} surface={surface} />
      <Block position={[0.46, lowerY, 3.12]} size={[0.48, lowerHeight, 0.2]} surface={surface} />
      <Block position={[4.02, lowerY, 3.12]} size={[0.42, lowerHeight, 0.2]} surface={surface} />
      <Block position={[-2.65, 1.2, 3.12]} size={[2.15, 0.42, 0.2]} surface={surface} />
      <Block position={[2.3, 1.2, 3.12]} size={[2.7, 0.42, 0.2]} surface={surface} />

      <Block position={[-3.14, upperY, 0]} size={[0.2, upperHeight, 5.05]} surface={surface} />
      <Block position={[3.84, upperY, 0]} size={[0.2, upperHeight, 5.05]} surface={surface} />
      <Block position={[0.35, upperY, -2.48]} size={[6.85, upperHeight, 0.2]} surface={surface} />
      <Block position={[-2.48, upperY, 2.48]} size={[1.25, upperHeight, 0.2]} surface={surface} />
      <Block position={[3.15, upperY, 2.48]} size={[1.25, upperHeight, 0.2]} surface={surface} />
      <Block position={[0.35, 4.34, 2.48]} size={[4.45, 0.45, 0.2]} surface={surface} />
      <Block position={[0.35, 6.37, 2.48]} size={[4.45, 0.36, 0.2]} surface={surface} />
    </>
  );
}

function MasonryWalls({ activeStage, reducedMotion }: { activeStage: number; reducedMotion: boolean }) {
  return (
    <BuildLayer show={activeStage >= 3 && activeStage < 5} reducedMotion={reducedMotion}>
      <WallSet surface="brick" />
    </BuildLayer>
  );
}

function RoofForms({ activeStage, reducedMotion }: { activeStage: number; reducedMotion: boolean }) {
  return (
    <BuildLayer show={activeStage >= 4} reducedMotion={reducedMotion}>
      <Block position={[0.25, 6.96, 0]} size={[10.2, 0.28, 8.25]} surface="metal" radius={0.045} />
      <Block position={[0.25, 6.79, 0]} size={[9.9, 0.06, 7.95]} surface="timber" radius={0.015} />
      <Block position={[-0.35, 3.55, 3.92]} size={[2.75, 0.17, 1.25]} surface="metal" radius={0.025} />
      <Block position={[-0.35, 3.43, 3.92]} size={[2.45, 0.045, 1.05]} surface="timber" radius={0.012} />
      <Block position={[2.45, 3.88, 3.38]} size={[3.55, 0.08, 1.94]} surface="timber" radius={0.015} />
    </BuildLayer>
  );
}

function ExteriorFinishes({ activeStage, reducedMotion }: { activeStage: number; reducedMotion: boolean }) {
  return (
    <BuildLayer show={activeStage >= 5} reducedMotion={reducedMotion}>
      <WallSet surface="plaster" />

      <WindowUnit center={[-2.65, 2.2, 3.245]} width={2.05} height={1.92} z={3.245} mullions={2} />
      <WindowUnit center={[2.25, 2.2, 3.245]} width={2.65} height={1.9} z={3.245} mullions={2} />
      <Block position={[-0.42, 2.14, 3.36]} size={[1.05, 2.25, 0.1]} surface="timber" radius={0.025} />
      <Block position={[-1.02, 2.14, 3.38]} size={[0.07, 2.38, 0.1]} surface="metal" />
      <Block position={[0.18, 2.14, 3.38]} size={[0.07, 2.38, 0.1]} surface="metal" />
      <Block position={[0.06, 2.16, 3.44]} size={[0.045, 0.045, 0.04]} surface="metal" radius={0.02} />

      <WindowUnit center={[0.54, 5.27, 2.62]} width={4.45} height={1.8} z={2.62} mullions={3} />
      <WindowUnit center={[3.1, 5.23, -2.62]} width={1.28} height={1.68} z={-2.62} mullions={1} />

      <Block position={[2.45, 4.96, 3.92]} size={[3.55, 0.09, 0.08]} surface="metal" radius={0.018} />
      {Array.from({ length: 5 }, (_, index) => {
        const x = 0.72 + index * 0.865;
        return (
          <group key={`rail:${index}`}>
            <Block position={[x, 4.57, 3.92]} size={[0.045, 0.78, 0.045]} surface="metal" radius={0.012} />
            <Block position={[x, 4.58, 3.88]} size={[0.79, 0.65, 0.035]} surface="glass" radius={0.008} castShadow={false} />
          </group>
        );
      })}

      <Block position={[4.37, 2.48, 0]} size={[0.1, 2.1, 3.75]} surface="stone" radius={0.015} />
      <Block position={[3.91, 2.25, 3.31]} size={[0.12, 2.42, 0.12]} surface="stone" radius={0.018} />
      {Array.from({ length: 15 }, (_, index) => (
        <Block
          key={`fin:${index}`}
          position={[-2.86 + index * 0.145, 5.27, 2.68]}
          size={[0.055, 2.1, 0.13]}
          surface="timber"
          radius={0.012}
        />
      ))}

      <Block position={[-0.42, 0.98, 3.75]} size={[1.85, 0.11, 0.72]} surface="path" radius={0.03} />
      <Block position={[-0.42, 0.82, 4.38]} size={[1.5, 0.1, 0.52]} surface="path" radius={0.03} />
    </BuildLayer>
  );
}

function PalmTree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 1.23, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.19, 2.45, 8]} />
        <meshStandardMaterial color="#82735a" roughness={0.94} />
      </mesh>
      {Array.from({ length: 9 }, (_, index) => {
        const angle = (index / 9) * Math.PI * 2;
        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * 0.67, 2.48 - (index % 3) * 0.035, Math.sin(angle) * 0.67]}
            rotation={[Math.cos(angle) * -0.38, angle, Math.sin(angle) * 0.38]}
            castShadow
          >
            <coneGeometry args={[0.13, 1.55, 5]} />
            <meshStandardMaterial color={index % 2 ? "#596f56" : "#738461"} roughness={0.92} />
          </mesh>
        );
      })}
    </group>
  );
}

function Landscape({ activeStage, reducedMotion }: { activeStage: number; reducedMotion: boolean }) {
  return (
    <BuildLayer show={activeStage >= 6} reducedMotion={reducedMotion}>
      <Block position={[0, 0.015, 0]} size={[13.65, 0.08, 10.6]} surface="site" radius={0.045} />
      <Block position={[-0.4, 0.08, 4.15]} size={[2.4, 0.12, 2.35]} surface="path" radius={0.035} />
      <Block position={[0.5, 0.14, 4.15]} size={[0.68, 0.08, 0.72]} surface="site" radius={0.02} />

      <Block position={[-5.55, 0.07, 1.8]} size={[1.2, 0.11, 2.25]} surface="soil" radius={0.05} />
      <Block position={[-5.35, 0.08, -2.25]} size={[1.55, 0.12, 2.55]} surface="soil" radius={0.05} />
      <Block position={[5.45, 0.08, 1.9]} size={[1.3, 0.12, 2.4]} surface="soil" radius={0.05} />
      <Block position={[5.25, 0.08, -2.15]} size={[1.65, 0.12, 2.5]} surface="soil" radius={0.05} />

      <PlantCluster position={[-5.5, 0.15, 1.4]} scale={0.82} />
      <PlantCluster position={[-5.12, 0.16, -2.55]} scale={1.04} />
      <PlantCluster position={[5.45, 0.16, 1.1]} scale={0.94} />
      <PlantCluster position={[5.15, 0.16, -2.5]} scale={1.08} />
      <PalmTree position={[-6.15, 0.1, -3.25]} scale={0.88} />
      <PalmTree position={[6.2, 0.1, -3.55]} scale={0.95} />

      <pointLight position={[-1.25, 2.7, 3.28]} color="#f4c98c" intensity={0.6} distance={4.5} />
      <pointLight position={[2.15, 2.65, 3.26]} color="#f4c98c" intensity={0.55} distance={4.5} />
      <pointLight position={[2.5, 5.15, 2.5]} color="#f4c98c" intensity={0.42} distance={3.5} />
    </BuildLayer>
  );
}

export function HouseModel({ activeStage, reducedMotion }: { activeStage: number; reducedMotion: boolean }) {
  return (
    <>
      <Block position={[0, -0.14, 0]} size={[15, 0.25, 12]} surface="site" radius={0.06} />
      <PlanningLayout activeStage={activeStage} reducedMotion={reducedMotion} />
      <Foundation activeStage={activeStage} reducedMotion={reducedMotion} />
      <ConcreteFrame activeStage={activeStage} reducedMotion={reducedMotion} />
      <MasonryWalls activeStage={activeStage} reducedMotion={reducedMotion} />
      <RoofForms activeStage={activeStage} reducedMotion={reducedMotion} />
      <ExteriorFinishes activeStage={activeStage} reducedMotion={reducedMotion} />
      <Landscape activeStage={activeStage} reducedMotion={reducedMotion} />
    </>
  );
}
