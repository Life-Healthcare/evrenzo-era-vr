import assets from "@/config/assets";

export function asset(url: string): string {
  return url.replace(/^\//, process.env.PUBLIC_PATH);
}

export function preloadAssets() {
  const total = Object.keys(assets).length;
  let loaded = 0;
  type OnProgress = (progress: number) => void;
  let progressFn: OnProgress = () => undefined;
  return {
    onProgress(fn: OnProgress) {
      progressFn = fn;
      return this;
    },
    load() {
      return new Promise(async (resolve, reject) => {
        try {
          // @note removed for now
          // for (const asset in assets) {
          //   const res = await fetch(assets[asset]);
          //   const blob = await res.blob();
          //   assets[asset] = URL.createObjectURL(blob);
          //   loaded++;
          //   progressFn(loaded / total);
          // }
          resolve(assets);
        } catch (err) {
          reject(err);
        }
      });
    },
  };
}
