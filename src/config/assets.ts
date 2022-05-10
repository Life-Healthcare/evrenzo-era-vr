import { asset } from "@/utils";

type Assets = {
  [asset: string]: string;
};

const assets: Assets = {
  // General
  buttonSkipAndContinue: asset("/assets/buttons/skip-and-continue.png"),
  buttonContinue: asset("/assets/buttons/continue.png"),
  buttonPlay: asset("/assets/buttons/play.png"),
  // Home
  homeSphere: asset("/assets/home/sphere.mp4"),
  homeInstructions: asset("/assets/home/instructions.png"),
  homeStartExperience: asset("/assets/buttons/start-experience.png"),
  homeDisclaimer: asset("/assets/home/disclaimer.png"),
  homeJobCode: asset("/assets/home/job-code.png"),
  // Aerial 1
  aerial1Sphere: asset("/assets/aerial-1/sphere.mp4"),
  aerial1ChartIntro: asset("/assets/aerial-1/chart-intro.png"),
  aerial1Chart: asset("/assets/aerial-1/chart.png"),
  aerial1Voiceover1: asset("/assets/aerial-1/voiceover-1.mp3"),
  aerial1Voiceover2: asset("/assets/aerial-1/voiceover-2.mp3"),
  // Aerial 2
  aerial2Sphere: asset("/assets/aerial-2/sphere.mp4"),
  aerial2VideoPoster: asset("/assets/aerial-2/video-poster.png"),
  aerial2Video: asset("/assets/aerial-2/video.mp4"),
  aerial1Voiceover: asset("/assets/aerial-2/voiceover.mp3"),
  // Farmers
  farmersSphere: asset("/assets/farmers/sphere.mp4"),
  farmersVoiceover: asset("/assets/farmers/voiceover.mp3"),
  // Yak
  yakSphere: asset("/assets/yak/sphere.mp4"),
  yakVoiceover: asset("/assets/yak/voiceover.mp3"),
  // Mountain pass
  mountainPassSphere: asset("/assets/mountain-pass/sphere.mp4"),
  mountainVoiceover: asset("/assets/mountain-pass/voiceover.mp3"),
  // Timelapse
  timelapseSphere: asset("/assets/timelapse/sphere.mp4"),
  timelapseVideoPoster: asset("/assets/timelapse/video-poster.png"),
  timelapseVideo: asset("/assets/timelapse/video.mp4"),
  timelapseImage: asset("/assets/timelapse/image.png"),
  timelapseVoiceover1: asset("/assets/timelapse/voiceover-1.mp3"),
  timelapseVoiceover2: asset("/assets/timelapse/voiceover-2.mp3"),
  timelapseVoiceover3: asset("/assets/timelapse/voiceover-3.mp3"),
  // end
  endSphere: asset("/assets/end/sphere.mp4"),
  endImage: asset("/assets/end/image.png"),
  endVoiceover: asset("/assets/end/voiceover.mp3"),
};

export default assets;