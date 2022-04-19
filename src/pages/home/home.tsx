import React from "react";
import { Text } from "@react-three/drei";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      {/*<mesh>*/}
      {/*  <boxBufferGeometry />*/}
      {/*  <meshBasicMaterial color="crimson" />*/}
      {/*</mesh>*/}
      <Button
        onSelect={() => {
          console.log("?");
        }}
      >
        <Text>Start Experience</Text>
      </Button>
    </React.Suspense>
  );
}
