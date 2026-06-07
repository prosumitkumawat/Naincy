import { Canvas } from '@react-three/fiber';
import { Stars, Float, Sparkles } from '@react-three/drei';

function FloatingElements() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={10} size={4} speed={0.4} opacity={0.2} color="#ffb6c1" />
       
       <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
           <mesh position={[-3, 2, -5]}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#8b5cf6" wireframe />
           </mesh>
       </Float>
       <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
           <mesh position={[4, -1, -4]}>
              <icosahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#ec4899" wireframe />
           </mesh>
       </Float>
       <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
           <mesh position={[0, -3, -8]}>
              <torusGeometry args={[1.5, 0.4, 16, 100]} />
              <meshStandardMaterial color="#6366f1" wireframe />
           </mesh>
       </Float>
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <FloatingElements />
      </Canvas>
    </div>
  );
}
