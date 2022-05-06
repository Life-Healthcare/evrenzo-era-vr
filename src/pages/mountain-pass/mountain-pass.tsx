import React from "react";
import Sphere from "@/components/sphere/sphere";
import { asset } from "@/utils";
import { PageId } from "@/types";
import useAppState from "@/hooks/use-app-state";
import config from "@/config/config";
import useAudio from "@/hooks/use-audio";

export default function MountainPass() {
  const setPage = useAppState((state) => state.setPage);

  useAudio(asset("/assets/mountain-pass/voiceover.mp3"));

  return (
    <Sphere
      type="video"
      src={asset("/assets/mountain-pass/sphere.mp4")}
      loop={false}
      playbackRate={config.env === "development" ? 8 : 1}
      onVideoEnded={() => setPage({ id: PageId.mountainPass })}
    />
  );
}
