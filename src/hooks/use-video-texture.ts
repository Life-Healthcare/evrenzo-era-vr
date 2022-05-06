import React from "react";
import { PlaneBufferGeometryProps } from "@react-three/fiber";
import config from "@/config/config";

type UseVideoTexture = {
  video: HTMLVideoElement;
  args: PlaneBufferGeometryProps["args"];
};

export default function useVideoTexture(
  src: string,
  height: number,
  onEnded?: () => void
): UseVideoTexture {
  const onEndedRef = React.useRef(onEnded);
  React.useMemo(() => {
    onEndedRef.current = onEnded;
  }, [onEnded]);

  const video = React.useMemo(() => {
    return document.querySelector<HTMLVideoElement>("#content-video");
  }, []);

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    function onLoaded() {
      const aspect = video.videoWidth / video.videoHeight;
      const width = height * aspect;
      if (isNaN(width)) return;
      setWidth(width);
    }

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEndedRef.current);

    video.muted = false;
    video.src = src;
    video.load();
    video.play().catch((err) => {
      console.error(err);
    });

    onLoaded();
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEndedRef.current);
    };
  }, [video, src, height]);

  return { video, args: [width, height] };
}
