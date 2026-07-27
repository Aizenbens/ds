import { useThree, useFrame } from "@react-three/fiber";
import { useEffect } from "react";

export default function Camera() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0.8, 0);
  }, [camera]);

  useFrame(() => {
    // سيتم إضافة Head Bob لاحقًا هنا
  });

  return null;
}
