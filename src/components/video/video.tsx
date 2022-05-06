import React from "react";
import { GroupProps } from "@react-three/fiber";
import useVideoTexture from "@/hooks/use-video-texture";
import config from "@/config/config";

type Props = GroupProps & {
  src?: string;
  height?: number;
  onEnded?: () => void;
};

export default function Video({ src, height, onEnded, ...props }: Props) {
  const texture = useVideoTexture(src, height, onEnded);

  React.useMemo(() => {
    texture.video.playbackRate = config.env === "development" ? 8 : 1;
  }, [texture]);

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
