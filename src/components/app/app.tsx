import React from "react";
import { DefaultXRControllers, VRCanvas as Canvas } from "@react-three/xr";
import { Text } from "@react-three/drei";
import { AppReset } from "@/components/app/app.styles";
import canvasConfig from "@/config/canvas-config";
import Container from "@/components/app/container";
import Camera from "@/components/camera/camera";
import Pages from "@/components/pages/pages";
import useAppState from "@/hooks/use-app-state";
import { PageId } from "@/types";

// @todo remove when not in debug mode
window.addEventListener("keydown", (event) => {
  const { setPage } = useAppState.getState();
  const key = event.key.toLowerCase();
  switch (key) {
    case "1":
      setPage({ id: PageId.home });
      break;
    case "2":
      setPage({ id: PageId.aerial1 });
      break;
    case "3":
      setPage({ id: PageId.aerial2 });
      break;
    case "4":
      setPage({ id: PageId.farmers });
      break;
    case "5":
      setPage({ id: PageId.yak });
      break;
    case "6":
      setPage({ id: PageId.mountainPass });
      break;
    case "7":
      setPage({ id: PageId.timelapse });
      break;
    case "8":
      setPage({ id: PageId.end });
      break;
  }
});

export default function App() {
  return (
    <>
      <AppReset />
      <Canvas flat linear dpr={1}>
        <React.Suspense fallback={<Text>Loading...</Text>}>
          <Container>
            <Camera />
            <DefaultXRControllers />
            <ambientLight />
            <group
              position={canvasConfig.camera.position
                .clone()
                .multiplyScalar(-1)
                .add(canvasConfig.scene.offset)}
            >
              <Pages />
            </group>
          </Container>
        </React.Suspense>
      </Canvas>
    </>
  );
}
