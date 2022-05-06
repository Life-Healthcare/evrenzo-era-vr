import React from "react";
import Sphere from "@/components/sphere/sphere";
import { asset } from "@/utils";
import Image from "@/components/image/image";
import { Interactive } from "@react-three/xr";
import Button from "@/components/button/button";
import { PageId } from "@/types";
import useAppState from "@/hooks/use-app-state";
import config from "@/config/config";
import Video from "@/components/video/video";
import useAudio from "@/hooks/use-audio";

export default function Aerial2() {
  const setPage = useAppState((state) => state.setPage);

  const [sphereVideoEnded, setSphereVideoEnded] = React.useState(false);
  const [videoEnded, setVideoEnded] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);

  const audio = useAudio(asset("/assets/aerial-2/voiceover.mp3"));

  const videoButton = React.useMemo(() => {
    return videoEnded ? "continue" : "skip-and-continue";
  }, [videoEnded]);

  return (
    <Sphere
      type="video"
      src={asset("/assets/aerial-2/sphere.mp4")}
      loop={false}
      playbackRate={config.env === "development" ? 8 : 1}
      onVideoEnded={() => setSphereVideoEnded(true)}
    >
      {sphereVideoEnded && (
        <group position={[0, 0.5, 0]}>
          {!showVideo && (
            <>
              <Interactive onSelect={() => setShowVideo(true)}>
                <Image
                  src={asset("/assets/aerial-2/video-poster.png")}
                  height={3}
                />
              </Interactive>
              <Button
                image={asset("/assets/buttons/skip-and-continue.png")}
                height={0.5}
                position={[0, -2, 0]}
                onSelect={() => setPage({ id: PageId.farmers })}
              />
            </>
          )}
          {showVideo && (
            <>
              <Video
                src={asset("/assets/aerial-2/video.mp4")}
                height={3}
                onPlay={() => audio.pause()}
                onEnded={() => setVideoEnded(true)}
              />
              <Button
                image={asset(`/assets/buttons/${videoButton}.png`)}
                height={0.5}
                position={[0, -2, 0]}
                onSelect={() => setPage({ id: PageId.farmers })}
              />
            </>
          )}
        </group>
      )}
    </Sphere>
  );
}
