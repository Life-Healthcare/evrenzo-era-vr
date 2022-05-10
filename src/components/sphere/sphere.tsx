import React from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import canvasConfig from "@/config/canvas-config";
import useMounted from "@/hooks/use-mounted";

type Props = {
  src: string;
  children?: React.ReactNode;
  loop?: boolean;
  onVideoEnded?: () => void;
};

export default function Sphere({
  src,
  children,
  loop = true,
  onVideoEnded,
}: Props) {
  const { gl, camera } = useThree();

  const radius = React.useMemo(() => {
    const cam = camera as THREE.PerspectiveCamera;
    const fovInRadians = (cam.fov * Math.PI) / 180;
    const height = Math.abs(
      canvasConfig.camera.position.z * Math.tan(fovInRadians / 2) * 2
    );
    const width = height * cam.aspect;
    return Math.max(width, height) * 2;
  }, [camera]);

  const video = React.useMemo(() => {
    const video = document.querySelector<HTMLVideoElement>("#sphere-video");
    video.src = src;
    return video;
  }, [src]);

  React.useEffect(() => {
    video.loop = loop;
  }, [video, loop]);

  React.useEffect(() => {
    video.addEventListener("ended", onVideoEnded);
    video.play().catch((err) => {
      console.error(err);
    });
    return () => {
      video.removeEventListener("ended", onVideoEnded);
    };
  }, [video, onVideoEnded]);

  const layersSupported = React.useMemo(() => {
    return "XRMediaBinding" in window;
  }, []);

  // High performance rendering of immersive stereoscopic video
  React.useEffect(() => {
    if (!layersSupported) return;
    const session = gl.xr.getSession();
    if (session === null) return;
    // @ts-ignore
    const xrMediaFactory = new XRMediaBinding(session);

    function onReady() {
      const request = session.requestReferenceSpace("local");
      if (!request) return;
      request.then((refSpace) => {
        const mediaLayer = xrMediaFactory.createEquirectLayer(video, {
          space: refSpace,
          centralHorizontalAngle: Math.PI * 2,
          layout: "stereo-top-bottom",
        });
        video.play().catch((err) => {
          console.error(err);
        });
        try {
          session
            .updateRenderState({
              // @ts-ignore
              layers: [mediaLayer, ...session.renderState.layers],
            })
            .catch((err) => {
              console.error(err);
            });
        } catch (err) {
          console.error(err);
        }
      });
    }

    video.addEventListener("canplaythrough", onReady);
    return () => {
      video.removeEventListener("canplaythrough", onReady);
    };
  }, [layersSupported, gl, video]);

  const mounted = useMounted();

  if (!mounted) return <></>;

  if (layersSupported) {
    return <>{children}</>;
  }

  return (
    <group>
      <group rotation={[0, THREE.MathUtils.degToRad(-90), 0]}>
        <mesh
          scale={[-1, 1, 1]}
          position={canvasConfig.camera.position.clone()}
        >
          <sphereBufferGeometry args={[radius, 64, 64]} />
          <meshBasicMaterial side={THREE.BackSide}>
            <videoTexture attach="map" args={[video]} />
          </meshBasicMaterial>
        </mesh>
      </group>
      <group>{children}</group>
    </group>
  );
}
