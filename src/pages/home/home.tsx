import React from "react";
import { useNavigate } from "react-router-dom";
import { Interactive } from "@react-three/xr";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import Sphere from "@/components/sphere/sphere";
import assets from "@/config/assets";
import Button from "@/components/button/button";
import useSceneSize from "@/hooks/use-scene-size";
import Image from "@/components/image/image";

export default function Home() {
  return (
    <Sphere src={assets.home.sphere}>
      <group position={[0, 0.5, 0]}>
        <Image src="/assets/home/instructions.png" height={3} />
        {/*<Interactive onSelect={() => navigate("/scene/1")}>*/}
        {/*  <mesh>*/}
        {/*    <planeBufferGeometry args={[imageHeight * aspect, imageHeight]} />*/}
        {/*    <meshBasicMaterial map={texture} transparent />*/}
        {/*  </mesh>*/}
        {/*</Interactive>*/}
        <Interactive>
          <Button
            image="/assets/buttons/start-experience.png"
            height={0.5}
            position={[0, -2, 0]}
          />
        </Interactive>
      </group>
    </Sphere>
  );
}
