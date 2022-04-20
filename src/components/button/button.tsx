import React from "react";
import { Interactive } from "@react-three/xr";
import { XRInteractionHandler } from "@react-three/xr/dist/Interactions";
import { GroupProps, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

type Props = GroupProps & {
  image?: string;
  height?: number;
  onSelect?: XRInteractionHandler;
};

export default function Button({ image, height, onSelect, ...props }: Props) {
  const texture = useTexture(image);
  const { gl } = useThree();
  React.useMemo(() => {
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  }, [texture, gl]);
  const width = React.useMemo(() => {
    const aspect = texture.image.width / texture.image.height;
    return height * aspect;
  }, [texture, height]);

  return (
    <Interactive onSelect={onSelect}>
      <group {...props}>
        <mesh frustumCulled={false}>
          <planeBufferGeometry args={[width, height]} />
          <meshBasicMaterial transparent map={texture} />
        </mesh>
      </group>
    </Interactive>
  );
}
