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
  userId: string;
  author?: string | null;
  caption?: string | null;
  imageUrl?: string | null;
  type: string;
  user?: {
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};
