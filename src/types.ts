export enum PageId {
  home,
  aerial1,
  aerial2,
}

export type Page = {
  id: PageId;
  params?: {
    [param: string]: any;
  };
};
