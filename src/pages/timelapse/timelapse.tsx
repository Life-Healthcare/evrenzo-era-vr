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

enum State {
  video,
  image,
}

export default function Timelapse() {
  const setPage = useAppState((state) => state.setPage);

  const [sphereVideoEnded, setSphereVideoEnded] = React.useState(false);
  const [videoEnded, setVideoEnded] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);

  const [state, setState] = React.useState<State>(State.video);

  const audioUrl = React.useMemo(() => {
    const id = state === State.video ? 1 : 2;
    return asset(`/assets/timelapse/voiceover-${id}.mp3`);
  }, [state]);

  const audio = useAudio(audioUrl);

  const videoButton = React.useMemo(() => {
    return videoEnded ? "continue" : "skip-and-continue";
  }, [videoEnded]);

  return (
    <Sphere
      type="video"
      src={asset("/assets/timelapse/sphere.mp4")}
      loop={false}
      playbackRate={config.env === "development" ? 8 : 1}
      onVideoEnded={() => setSphereVideoEnded(true)}
    >
      {sphereVideoEnded && (
        <group position={[0, 0.5, 0]}>
          {state === State.video && (
            <>
              {!showVideo && (
                <>
                  <Interactive onSelect={() => setShowVideo(true)}>
                    <Image
                      src={asset("/assets/timelapse/video-poster.png")}
                      height={3}
                    />
                  </Interactive>
                  <Button
                    image={asset("/assets/buttons/skip-and-continue.png")}
                    height={0.5}
                    position={[0, -2, 0]}
                    onSelect={() => setState(State.image)}
                  />
                </>
              )}
              {showVideo && (
                <>
                  <Video
                    src={asset("/assets/timelapse/video.mp4")}
                    height={3}
                    onPlay={() => audio.pause()}
                    onEnded={() => setVideoEnded(true)}
                  />
                  <Button
                    image={asset(`/assets/buttons/${videoButton}.png`)}
                    height={0.5}
                    position={[0, -2, 0]}
                    onSelect={() => setState(State.image)}
                  />
                </>
              )}
            </>
          )}
          {state === State.image && (
            <Interactive onSelect={() => setPage({ id: PageId.timelapse })}>
              <Image src={asset("/assets/timelapse/image.png")} height={3.5} />
            </Interactive>
          )}
        </group>
      )}
    </Sphere>
  );
}
