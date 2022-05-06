import React from "react";
import { GroupProps } from "@react-three/fiber";
import useVideoTexture from "@/hooks/use-video-texture";

type Props = GroupProps & {
  src?: string;
  height?: number;
  onEnded?: () => void;
};

export default function Video({ src, height, onEnded, ...props }: Props) {
  const texture = useVideoTexture(src, height, onEnded);

  return (
    <group {...props}>
      <mesh frustumCulled={false}>
        <planeBufferGeometry args={texture.args} />
        <meshBasicMaterial transparent>
          <videoTexture attach="map" args={[texture.video]} />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}
