import React from "react";
import { GroupProps } from "@react-three/fiber";
import useVideoTexture from "@/hooks/use-video-texture";
import config from "@/config/config";
import useVideo from "@/hooks/use-video";

type Props = GroupProps & {
  src?: string;
  height?: number;
  onPlay?: () => void;
  onEnded?: () => void;
};

export default function Video({
  src,
  height,
  onPlay,
  onEnded,
  ...props
}: Props) {
  const video = useVideo(src, { onPlay, onEnded });
  const texture = useVideoTexture(video, height);

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
