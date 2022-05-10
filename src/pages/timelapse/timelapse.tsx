import React from "react";
import { useNavigate } from "react-router-dom";
import Sphere from "@/components/sphere/sphere";
import Image from "@/components/image/image";
import Button from "@/components/button/button";
import Video from "@/components/video/video";
import useAudio from "@/hooks/use-audio";
import Interact from "@/components/interact/interact";
import assets from "@/config/assets";

enum State {
  video,
  image,
}

export default function Timelapse() {
  const navigate = useNavigate();

  const [sphereVideoEnded, setSphereVideoEnded] = React.useState(false);
  const [videoEnded, setVideoEnded] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);

  const [state, setState] = React.useState<State>(State.video);

  const audioSrc = React.useMemo(() => {
    if (!sphereVideoEnded) return assets.timelapseVoiceover1;
    if (state === State.video) return assets.timelapseVoiceover2;
    return assets.timelapseVoiceover3;
  }, [sphereVideoEnded, state]);

  const audio = useAudio(audioSrc);

  React.useEffect(() => {
    return () => audio.pause();
  }, []);

  const videoButton = React.useMemo(() => {
    if (videoEnded) return assets.buttonContinue;
    return assets.buttonSkipAndContinue;
  }, [videoEnded]);

  return (
    <Sphere
      type="video"
      src={assets.timelapseSphere}
      loop={false}
      onVideoEnded={() => setSphereVideoEnded(true)}
    >
      {sphereVideoEnded && (
        <group position={[0, 0.5, 0]}>
          {state === State.video && (
            <>
              {!showVideo && (
                <>
                  <Interact onSelect={() => setShowVideo(true)}>
                    <Image src={assets.timelapseVideoPoster} height={3} />
                  </Interact>
                  <Button
                    image={assets.buttonSkipAndContinue}
                    height={0.5}
                    position={[0, -2, 0]}
                    onSelect={() => setState(State.image)}
                  />
                </>
              )}
              {showVideo && (
                <>
                  <Video
                    src={assets.timelapseVideo}
                    height={3}
                    onPlay={() => audio.pause()}
                    onEnded={() => setVideoEnded(true)}
                  />
                  <Button
                    image={videoButton}
                    height={0.5}
                    position={[0, -2, 0]}
                    onSelect={() => setState(State.image)}
                  />
                </>
              )}
            </>
          )}
          {state === State.image && (
            <Interact onSelect={() => navigate("/end")}>
              <Image src={assets.timelapseImage} height={3.5} />
            </Interact>
          )}
        </group>
      )}
    </Sphere>
  );
}
