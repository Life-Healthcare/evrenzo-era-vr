import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <group>
      <mesh>
        <planeBufferGeometry />
        <meshBasicMaterial color="blue" />
      </mesh>
      <group position={[0, 0, 0.0001]}>{children}</group>
    </group>
  );
}
