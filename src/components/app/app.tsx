import React from "react";
import { VRCanvas as Canvas, DefaultXRControllers } from "@react-three/xr";
import { Text } from "@react-three/drei";
import { AppReset } from "@/components/app/app.styles";
import canvasConfig from "@/config/canvas-config";
import Container from "@/components/app/container";
import Camera from "@/components/camera/camera";
import Pages from "@/components/pages/pages";
import useAppState from "@/hooks/use-app-state";

// @todo remove when not in debug mode
window.addEventListener("keydown", (event) => {
  const { setPage } = useAppState.getState();
  const key = event.key.toLowerCase();
  switch (key) {
    case "1":
      setPage({ id: "home" });
      break;
    case "2":
      setPage({ id: "scene", params: { id: 1 } });
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
