import React from "react";
import { Text } from "@react-three/drei";
import useAppState from "@/hooks/use-app-state";
import { PageId } from "@/types";
import Home from "@/pages/home/home";
import Aerial1 from "@/pages/aerial-1/aerial-1";
import Aerial2 from "@/pages/aerial-2/aerial-2";

export default function Pages() {
  const page = useAppState((state) => state.page);

  switch (page.id) {
    case PageId.home:
      return <Home />;
    case PageId.aerial1:
      return <Aerial1 />;
    case PageId.aerial2:
      return <Aerial2 />;
    default:
      return <Text>Page Not Found</Text>;
  }
}
