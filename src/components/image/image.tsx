import React from "react";
import { GroupProps, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

type Props = GroupProps & {
  src?: string;
  height?: number;
};

export default function Image({ src, height, ...props }: Props) {
  const texture = useTexture(src);
  const { gl } = useThree();
  React.useMemo(() => {
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  }, [texture, gl]);
  const width = React.useMemo(() => {
    const aspect = texture.image.width / texture.image.height;
    return height * aspect;
  }, [texture, height]);

  return (
    <group {...props}>
      <mesh frustumCulled={false}>
        <planeBufferGeometry args={[width, height]} />
        <meshBasicMaterial transparent map={texture} />
      </mesh>
    </group>
  );
}
