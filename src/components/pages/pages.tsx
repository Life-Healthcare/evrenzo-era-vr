import React from "react";
import { Text } from "@react-three/drei";
import useAppState from "@/hooks/use-app-state";
import { PageId } from "@/types";
import Home from "@/pages/home/home";
import First from "@/pages/first/first";

export default function Pages() {
  const page = useAppState((state) => state.page);

  switch (page.id) {
    case PageId.home:
      return <Home />;
    case PageId.first:
      return <First />;
    default:
      return <Text>Page Not Found</Text>;
  }
}
