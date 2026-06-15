"use client";

import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

const BLUE = "#1e50e5";
const YELLOW = "#ffc81a";
const PAPER = "#eaf0ff";

/**
 * Brand objects: a distorting cobalt "vision" orb, a yellow "path" ring,
 * and small accent spheres. The whole rig parallax-rotates toward the
 * pointer. All geometry is local (no network HDRI / asset fetches).
 */
function Rig() {
  const group = useRef<Group>(null);
  const orb = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      // ease group toward pointer for a gentle parallax tilt
      const targetY = state.pointer.x * 0.5;
      const targetX = -state.pointer.y * 0.35;
      group.current.rotation.y +=
        (targetY - group.current.rotation.y) * Math.min(1, delta * 2.5);
      group.current.rotation.x +=
        (targetX - group.current.rotation.x) * Math.min(1, delta * 2.5);
    }
    if (orb.current) orb.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={group}>
      {/* Cobalt vision orb */}
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh ref={orb} position={[-0.1, 0.75, -0.2]} scale={1.2}>
          <icosahedronGeometry args={[1, 12]} />
          <MeshDistortMaterial
            color={BLUE}
            distort={0.32}
            speed={1.6}
            roughness={0.15}
            metalness={0.45}
          />
        </mesh>
      </Float>

      {/* Yellow path ring */}
      <Float speed={2} rotationIntensity={1.1} floatIntensity={1.4}>
        <mesh position={[1.2, 1.35, 0.2]} rotation={[1.1, 0.4, 0]}>
          <torusGeometry args={[0.6, 0.18, 40, 80]} />
          <meshStandardMaterial
            color={YELLOW}
            roughness={0.25}
            metalness={0.35}
            emissive={YELLOW}
            emissiveIntensity={0.12}
          />
        </mesh>
      </Float>

      {/* Accent spheres */}
      <Float speed={2.6} rotationIntensity={0.6} floatIntensity={1.8}>
        <mesh position={[1.4, -0.4, 0.6]} scale={0.34}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial color={PAPER} roughness={0.1} metalness={0.6} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
        <mesh position={[-1.4, -0.1, -0.3]} scale={0.28}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial color={BLUE} roughness={0.2} metalness={0.5} />
        </mesh>
      </Float>
      <Float speed={3.1} rotationIntensity={0.8} floatIntensity={2}>
        <mesh position={[-1.0, 1.7, 0.4]} scale={0.2}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={YELLOW}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 6, 4]} intensity={2.1} />
      <pointLight position={[-6, -2, -2]} intensity={40} color={BLUE} />
      <pointLight position={[6, 4, 3]} intensity={28} color={YELLOW} />
      <Rig />
    </Canvas>
  );
}
