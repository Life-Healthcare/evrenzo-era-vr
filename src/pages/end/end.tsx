import React from "react";
import Sphere from "@/components/sphere/sphere";
import { asset } from "@/utils";
import Image from "@/components/image/image";
import { Interactive } from "@react-three/xr";
import { PageId } from "@/types";
import useAppState from "@/hooks/use-app-state";
import config from "@/config/config";

export default function End() {
  const setPage = useAppState((state) => state.setPage);

  return (
    <Sphere
      type="video"
      src={asset("/assets/end/sphere.mp4")}
      playbackRate={config.env === "development" ? 8 : 1}
    >
      <Interactive onSelect={() => setPage({ id: PageId.home })}>
        <Image src={asset("/assets/end/image.png")} height={4} />
      </Interactive>
    </Sphere>
  );
}
