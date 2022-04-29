import React from "react";
import { Text } from "@react-three/drei";
import useAppState from "@/hooks/use-app-state";
import Home from "@/pages/home/home";
import Scene from "@/pages/scene/scene";

export default function Pages() {
  const page = useAppState((state) => state.page);

  switch (page.id) {
    case "home":
      return <Home />;
    case "scene":
      return <Scene />;
    default:
      return <Text>Page Not Found</Text>;
  }
}
