export enum PageId {
  home,
  aerial1,
  aerial2,
  farmers,
  yak,
  mountainPass,
  timelapse,
  end,
}

export type Page = {
  id: PageId;
  params?: {
    [param: string]: any;
  };
};

export type VideoState = {
  loaded: boolean;
  playing: boolean;
  ended: boolean;
};

export type UseVideo = [VideoState, HTMLVideoElement];
