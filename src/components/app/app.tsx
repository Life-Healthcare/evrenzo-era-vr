import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { VRCanvas as Canvas } from "@react-three/xr";
import { Text } from "@react-three/drei";
import { AppReset } from "@/components/app/app.styles";
import Container from "@/components/app/container";

const Home = React.lazy(() => import("@/pages/home/home"));

export default function App() {
  return (
    <>
      <AppReset />
      <Canvas flat linear dpr={1}>
        <React.Suspense fallback={<Text>Loading...</Text>}>
          <Router>
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Container>
          </Router>
        </React.Suspense>
      </Canvas>
    </>
  );
}
