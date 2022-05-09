import React from "react";
import Sphere from "@/components/sphere/sphere";
import { asset } from "@/utils";
import Image from "@/components/image/image";
import Button from "@/components/button/button";
import { PageId } from "@/types";
import useAppState from "@/hooks/use-app-state";
import useAudio from "@/hooks/use-audio";
import Interact from "@/components/interact/interact";

export default function Aerial1() {
  const setPage = useAppState((state) => state.setPage);

  const [sphereVideoEnded, setSphereVideoEnded] = React.useState(false);
  const [showChart, setShowChart] = React.useState(false);

  const audio = useAudio(
    asset(`/assets/aerial-1/voiceover-${showChart ? 2 : 1}.mp3`)
  );

  React.useEffect(() => {
    return () => audio.pause();
  }, []);

  return (
    <Sphere
      type="video"
      src={asset("/assets/aerial-1/sphere.mp4")}
      loop={false}
      onVideoEnded={() => setSphereVideoEnded(true)}
    >
      {sphereVideoEnded && (
        <group position={[0, 0.5, 0]}>
          {!showChart && (
            <>
              <Interact onSelect={() => setShowChart(true)}>
                <Image
                  src={asset("/assets/aerial-1/chart-intro.png")}
                  height={3}
                />
              </Interact>
              <Button
                image={asset("/assets/buttons/skip-and-continue.png")}
                height={0.5}
                position={[0, -2, 0]}
                onSelect={() => setPage({ id: PageId.aerial2 })}
              />
            </>
          )}
          {showChart && (
            <>
              <Image src={asset("/assets/aerial-1/chart.png")} height={3} />
              <Button
                image={asset("/assets/buttons/continue.png")}
                height={0.5}
                position={[0, -2, 0]}
                onSelect={() => setPage({ id: PageId.aerial2 })}
              />
            </>
          )}
        </group>
      )}
    </Sphere>
  );
}
