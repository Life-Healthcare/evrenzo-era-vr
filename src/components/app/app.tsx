import React from "react";
import * as THREE from "three";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { VRCanvas as Canvas, DefaultXRControllers } from "@react-three/xr";
import { Text } from "@react-three/drei";
import { AppReset } from "@/components/app/app.styles";
import canvasConfig from "@/config/canvas-config";
import Container from "@/components/app/container";
import Camera from "@/components/camera/camera";

const Home = React.lazy(() => import("@/pages/home/home"));

export default function App() {
  return (
    <>
      <AppReset />
      <Canvas flat linear dpr={1}>
        <React.Suspense fallback={<Text>Loading...</Text>}>
          <Router>
            <Container>
              <Camera />
              <DefaultXRControllers />
              <ambientLight />
              <group
                position={canvasConfig.camera.position
                  .multiplyScalar(-1)
                  .add(canvasConfig.scene.offset)}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </group>
            </Container>
          </Router>
        </React.Suspense>
      </Canvas>
    </>
  );
}
