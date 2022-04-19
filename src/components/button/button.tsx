import React from "react";
import { Interactive } from "@react-three/xr";
import { XRInteractionHandler } from "@react-three/xr/dist/Interactions";

type Props = {
  children?: React.ReactNode;
  onSelect?: XRInteractionHandler;
};

export default function Button({ children, ...props }: Props) {
  return (
    <Interactive {...props}>
      <group>
        <mesh>
          <planeBufferGeometry />
          <meshBasicMaterial color="blue" />
        </mesh>
        <group position={[0, 0, 0.0001]}>{children}</group>
      </group>
    </Interactive>
  );
}
