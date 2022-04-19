import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@react-three/drei";
import Button from "@/components/button/button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <group>
      <Button onSelect={() => navigate("/scene/1")}>
        <Text>Start Experience</Text>
      </Button>
    </group>
  );
}
