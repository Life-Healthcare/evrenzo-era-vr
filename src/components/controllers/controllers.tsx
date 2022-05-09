import React from "react";
import * as THREE from "three";
import { useXR } from "@react-three/xr";

const RAY_LENGTH = Math.PI * 0.5;

type Props = {
  rayLength?: number;
};

export default function Controllers({ rayLength = RAY_LENGTH }: Props) {
  const { controllers } = useXR();

  const groupsRef = React.useRef<THREE.Group[]>([]);
  const meshesRef = React.useRef<THREE.Mesh[]>([]);

  React.useEffect(() => {
    controllers.forEach((controller, index) => {
      groupsRef.current[index].rotation.set(Math.PI * 0.5, 0, 0);
      meshesRef.current[index].position.set(0, rayLength * -0.5, 0);
      controller.controller.add(groupsRef.current[index]);
    });
    return () => {
      controllers.forEach((controller, index) => {
        controller.grip.remove(groupsRef.current[index]);
        controller.controller.remove(groupsRef.current[index]);
      });
    };
  }, [controllers, rayLength]);

  return (
    <>
      {controllers.map((controller, index) => {
        return (
          <group
            key={index}
            ref={(group) => {
              groupsRef.current[index] = group;
            }}
          >
            <mesh
              ref={(mesh) => {
                meshesRef.current[index] = mesh;
              }}
            >
              <boxBufferGeometry args={[0.002, rayLength, 0.002]} />
              <meshBasicMaterial
                color="white"
                side={THREE.DoubleSide}
                transparent
                opacity={0.5}
              />
            </mesh>
          </group>
        );
      })}
    </>
  );
}
