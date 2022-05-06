import React from "react";

type UseAudio = HTMLAudioElement;

export default function useAudio(src: string, onEnded?: () => void): UseAudio {
  const onEndedRef = React.useRef(onEnded);
  React.useMemo(() => {
    onEndedRef.current = onEnded;
  }, [onEnded]);

  const audio = React.useMemo(() => {
    return document.querySelector<HTMLAudioElement>("#audio");
  }, []);

  React.useEffect(() => {
    audio.addEventListener("ended", onEndedRef.current);

    audio.pause();
    audio.currentTime = 0;
    audio.muted = false;
    audio.src = src;
    audio.load();
    audio.play().catch((err) => {
      console.error(err);
    });
    return () => {
      audio.removeEventListener("ended", onEndedRef.current);
    };
  }, [audio, src]);

  return audio;
}
