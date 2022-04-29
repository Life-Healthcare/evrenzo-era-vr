import React from "react";
import { useNavigate } from "react-router-dom";
import { Interactive } from "@react-three/xr";
import Sphere from "@/components/sphere/sphere";
import assets from "@/config/assets";
import Button from "@/components/button/button";
import Image from "@/components/image/image";
import { asset } from "@/utils";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Sphere src={assets.home.sphere}>
      <group position={[0, 0.5, 0]}>
        <Image src={asset("/assets/home/instructions.png")} height={3} />
        <Interactive>
          <Button
            image={asset("/assets/buttons/start-experience.png")}
            height={0.5}
            position={[0, -2, 0]}
            onSelect={() => navigate("/scene/1")}
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
