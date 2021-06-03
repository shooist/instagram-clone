export type FeedItemType = {
  id: string;
  uid: string;
  author: string;
  caption: string;
  imageUrl: string;
  createdAt: string;
};

export type ArticleModelType = {
  uid: string;
  caption: string;
  imageUrl: string;
  createdAt: string;
};

export type Article = {
  id: string;
  uid?: string | null;
  author?: string | null;
  caption?: string | null;
  imageUrl?: string | null;
  createdAt: string;
  updatedAt: string;
};
