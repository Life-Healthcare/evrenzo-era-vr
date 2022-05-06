import React from "react";
import Sphere from "@/components/sphere/sphere";
import Button from "@/components/button/button";
import Image from "@/components/image/image";
import { asset } from "@/utils";
import useAppState from "@/hooks/use-app-state";
import { PageId } from "@/types";

export default function Home() {
  const setPage = useAppState((state) => state.setPage);

  return (
    <Sphere type="video" src={asset("/assets/home/sphere.mp4")}>
      <group position={[0, 0.5, 0]}>
        <Image src={asset("/assets/home/instructions.png")} height={3} />
        <Button
          image={asset("/assets/buttons/start-experience.png")}
          height={0.5}
          position={[0, -2, 0]}
          onSelect={() => setPage({ id: PageId.aerial1 })}
        />
        <Image
          src={asset("/assets/home/disclaimer.png")}
          height={0.5}
          position={[0, -2.9, 0]}
        />
        <Image
          src={asset("/assets/home/job-code.png")}
          height={0.12}
          position={[0, -3.4, 0]}
        />
      </group>
    </Sphere>
  );
}
