import React from "react";
import { useNavigate } from "react-router-dom";
import Sphere from "@/components/sphere/sphere";
import Image from "@/components/image/image";
import Button from "@/components/button/button";
import Video from "@/components/video/video";
import useAudio from "@/hooks/use-audio";
import Interact from "@/components/interact/interact";
import assets from "@/config/assets";

export default function Aerial2() {
  const navigate = useNavigate();

  const [sphereVideoEnded, setSphereVideoEnded] = React.useState(false);
  const [videoEnded, setVideoEnded] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);

  const audio = useAudio(assets.aerial1Voiceover);

  const videoButton = React.useMemo(() => {
    if (videoEnded) return assets.buttonContinue;
    return assets.buttonSkipAndContinue;
  }, [videoEnded]);

  React.useEffect(() => {
    return () => audio.pause();
  }, []);

  return (
    <Sphere
      type="video"
      src={assets.aerial2Sphere}
      loop={false}
      onVideoEnded={() => setSphereVideoEnded(true)}
    >
      {sphereVideoEnded && (
        <group position={[0, 0.5, 0]}>
          {!showVideo && (
            <>
              <Interact onSelect={() => setShowVideo(true)}>
                <Image src={assets.aerial2VideoPoster} height={3} />
              </Interact>
              <Button
                image={assets.buttonSkipAndContinue}
                height={0.5}
                position={[0, -2, 0]}
                onSelect={() => navigate("/farmers")}
              />
            </>
          )}
          {showVideo && (
            <>
              <Video
                src={assets.aerial2Video}
                height={3}
                onPlay={() => audio.pause()}
                onEnded={() => setVideoEnded(true)}
              />
              <Button
                image={videoButton}
                height={0.5}
                position={[0, -2, 0]}
                onSelect={() => navigate("/farmers")}
              />
            </>
          )}
        </group>
      )}
    </Sphere>
  );
}
