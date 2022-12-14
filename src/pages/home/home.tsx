import React from "react";
import { useNavigate } from "react-router-dom";
import Sphere from "@/components/sphere/sphere";
import Button from "@/components/button/button";
import Image from "@/components/image/image";
import assets from "@/config/assets";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Sphere src={assets.homeSphere}>
      <group position={[0, 0.5, 0]}>
        <Image
          src={assets.homeDisclaimer}
          height={0.5}
          position={[0, 2, 0]}
        />
        <Image src={assets.homeInstructions} height={3} />
        <Button
          image={assets.homeStartExperience}
          height={0.5}
          position={[0, -2, 0]}
          onSelect={() => navigate("/aerial-1")}
        />
        <Image src={assets.homeLegal} height={0.4} position={[0, -2.7, 0]} />
        <Image src={assets.homeInfo} height={0.25} position={[0, -3.2, 0]} />
      </group>
    </Sphere>
  );
}
