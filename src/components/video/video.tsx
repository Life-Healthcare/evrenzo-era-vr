import React from "react";
import { GroupProps } from "@react-three/fiber";
import useVideoTexture from "@/hooks/use-video-texture";
import config from "@/config/config";
import useVideo from "@/hooks/use-video";
import Image from "@/components/image/image";
import Interact from "@/components/interact/interact";

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
  const [state, video] = useVideo(src, { onPlay, onEnded });
  const texture = useVideoTexture([state, video], height);

  React.useMemo(() => {
    texture.video.playbackRate = config.env === "development" ? 8 : 1;
  }, [texture]);

  React.useEffect(() => {
    function onEnded() {
      video.pause();
      video.currentTime = 0;
    }

    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("ended", onEnded);
    };
  }, [video]);

  return (
    <group {...props}>
      <Interact
        onSelect={() => {
          if (state.playing) {
            video.pause();
          } else {
            video.play().catch((err) => {
              console.error(err);
            });
          }
        }}
      >
        <mesh frustumCulled={false}>
          <planeBufferGeometry args={texture.args} />
          <meshBasicMaterial transparent depthWrite={false}>
            <videoTexture attach="map" args={[texture.video]} />
          </meshBasicMaterial>
        </mesh>
        {!state.playing && (
          <Image src="/assets/play.png" height={0.7} position={[0, 0, 0.001]} />
        )}
      </Interact>
    </group>
  );
}
