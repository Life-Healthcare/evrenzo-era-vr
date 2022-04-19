import * as THREE from "three";

type SceneConfig = {
  camera: {
    position: THREE.Vector3;
  };
};

const sceneConfig: SceneConfig = {
  camera: {
    position: new THREE.Vector3(0, 0, 5),
  },
};

export default sceneConfig;
