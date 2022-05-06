import React from "react";
import Sphere from "@/components/sphere/sphere";
import { asset } from "@/utils";
import { PageId } from "@/types";
import useAppState from "@/hooks/use-app-state";
import config from "@/config/config";
import useAudio from "@/hooks/use-audio";

export default function Yak() {
  const setPage = useAppState((state) => state.setPage);

  useAudio(asset("/assets/yak/voiceover.mp3"));

  return (
    <Sphere
      type="video"
      src={asset("/assets/yak/sphere.mp4")}
      loop={false}
      onVideoEnded={() => setPage({ id: PageId.mountainPass })}
    />
  );
}
