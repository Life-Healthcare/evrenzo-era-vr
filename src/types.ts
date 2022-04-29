export enum PageId {
  home,
  first,
}

export type Page = {
  id: PageId;
  params?: {
    [param: string]: any;
  };
};
