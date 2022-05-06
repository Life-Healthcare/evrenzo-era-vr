import React from "react";
import Sphere from "@/components/sphere/sphere";
import { asset } from "@/utils";
import Image from "@/components/image/image";
import { Interactive } from "@react-three/xr";
import Button from "@/components/button/button";
import { PageId } from "@/types";
import useAppState from "@/hooks/use-app-state";
import config from "@/config/config";

export default function Aerial1() {
  const setPage = useAppState((state) => state.setPage);

  const [videoEnded, setVideoEnded] = React.useState(false);
  const [showChart, setShowChart] = React.useState(false);

  return (
    <Sphere
      type="video"
      src={asset("/assets/aerial-1/sphere.mp4")}
      loop={false}
      playbackRate={config.env === "development" ? 8 : 1}
      onVideoEnded={() => setVideoEnded(true)}
    >
      {videoEnded && (
        <group position={[0, 0.5, 0]}>
          {!showChart && (
            <>
              <Interactive onSelect={() => setShowChart(true)}>
                <Image
                  src={asset("/assets/aerial-1/chart-intro.png")}
                  height={3}
                />
              </Interactive>
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