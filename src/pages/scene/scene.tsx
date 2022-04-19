import React from "react";

export default function Scene() {
  return (
    <group>
      <mesh>
        <boxBufferGeometry />
        <meshBasicMaterial color="crimson" />
      </mesh>
    </group>
  );
}
