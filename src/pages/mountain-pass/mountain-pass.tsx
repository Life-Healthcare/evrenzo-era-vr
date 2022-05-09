import React from "react";
import Sphere from "@/components/sphere/sphere";
import { asset } from "@/utils";
import { PageId } from "@/types";
import useAppState from "@/hooks/use-app-state";
import useAudio from "@/hooks/use-audio";

export default function MountainPass() {
  const setPage = useAppState((state) => state.setPage);

  const audio = useAudio(asset("/assets/mountain-pass/voiceover.mp3"));

  React.useEffect(() => {
    return () => audio.pause();
  }, []);

  return (
    <Sphere
      type="video"
      src={asset("/assets/mountain-pass/sphere.mp4")}
      loop={false}
      onVideoEnded={() => setPage({ id: PageId.timelapse })}
    />
  );
}
