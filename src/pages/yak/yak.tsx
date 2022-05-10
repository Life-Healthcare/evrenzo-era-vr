import React from "react";
import { useNavigate } from "react-router-dom";
import Sphere from "@/components/sphere/sphere";
import useAudio from "@/hooks/use-audio";
import assets from "@/config/assets";

export default function Yak() {
  const navigate = useNavigate();

  const audio = useAudio(assets.yakVoiceover);

  React.useEffect(() => {
    return () => audio.pause();
  }, []);

  return (
    <Sphere
      type="video"
      src={assets.yakSphere}
      loop={false}
      onVideoEnded={() => navigate("/mountain-pass")}
    />
  );
}
