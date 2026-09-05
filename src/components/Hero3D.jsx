import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

function WireframeShape() {
  const ref = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.22;
      ref.current.position.y = 0.1 + Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref} position={[1.9, 0.1, -1.5]} scale={[0.7, 1.35, 0.7]}>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshBasicMaterial color="#7c5cff" wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <WireframeShape />
      <Sparkles count={45} scale={7} size={2} speed={0.3} color="#8fb4ff" opacity={0.4} />
    </>
  );
}

function Hero3D() {
  return (
    <div className="hero3d" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Hero3D;
