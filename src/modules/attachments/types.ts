export interface linkResponse {
  links?: LinksEntity[] | null;
  linkCount: number;
}
export interface LinksEntity {
  _id: string;
  taleId: string;
  linkUrl: string;
  linkTitle: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  __v: number;
}
