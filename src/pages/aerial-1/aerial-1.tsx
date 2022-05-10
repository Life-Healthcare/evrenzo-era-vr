import React from "react";
import { useNavigate } from "react-router-dom";
import Sphere from "@/components/sphere/sphere";
import Image from "@/components/image/image";
import Button from "@/components/button/button";
import useAudio from "@/hooks/use-audio";
import Interact from "@/components/interact/interact";
import assets from "@/config/assets";

export default function Aerial1() {
  const navigate = useNavigate();

  const [sphereVideoEnded, setSphereVideoEnded] = React.useState(false);
  const [showChart, setShowChart] = React.useState(false);

  const audioSrc = React.useMemo(() => {
    if (showChart) return assets.aerial1Voiceover2;
    return assets.aerial1Voiceover1;
  }, [showChart]);

  const audio = useAudio(audioSrc);

  React.useEffect(() => {
    return () => audio.pause();
  }, []);

  return (
    <Sphere
      type="video"
      src={assets.aerial1Sphere}
      loop={false}
      onVideoEnded={() => setSphereVideoEnded(true)}
    >
      {sphereVideoEnded && (
        <group position={[0, 0.5, 0]}>
          {!showChart && (
            <>
              <Interact onSelect={() => setShowChart(true)}>
                <Image src={assets.aerial1ChartIntro} height={3} />
              </Interact>
              <Button
                image={assets.buttonSkipAndContinue}
                height={0.5}
                position={[0, -2, 0]}
                onSelect={() => navigate("/aerial-2")}
              />
            </>
          )}
          {showChart && (
            <>
              <Image src={assets.aerial1Chart} height={3} />
              <Button
                image={assets.buttonContinue}
                height={0.5}
                position={[0, -2, 0]}
                onSelect={() => navigate("/aerial-2")}
              />
            </>
          )}
        </group>
      )}
    </Sphere>
  );
}
