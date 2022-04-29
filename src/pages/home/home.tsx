import React from "react";
import { Interactive } from "@react-three/xr";
import Sphere from "@/components/sphere/sphere";
import Button from "@/components/button/button";
import Image from "@/components/image/image";
import { asset } from "@/utils";
import useAppState from "@/hooks/use-app-state";

export default function Home() {
  const setPage = useAppState((state) => state.setPage);

  return (
    <Sphere src={asset("/assets/home/sphere.jpg")}>
      <group position={[0, 0.5, 0]}>
        <Image src={asset("/assets/home/instructions.png")} height={3} />
        <Interactive>
          <Button
            image={asset("/assets/buttons/start-experience.png")}
            height={0.5}
            position={[0, -2, 0]}
            onSelect={() => setPage({ id: "scene", params: { id: 1 } })}
          />
        </Interactive>
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
