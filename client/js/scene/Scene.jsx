import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 2, 6],
        fov: 75,
      }}
    >
      {/* إضاءة */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={2} />

      {/* أرضية */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#4d7c42" />
      </mesh>

      {/* مكعب تجريبي */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
