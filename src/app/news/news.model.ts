export interface NewsList {
  limit?: number;
  posts?: NewsListPosts[];
  skip?: number;
  total?: number;
}

export interface NewsListPosts {
  body?: string;
  id?: number;
  title?: string;
  userId?: number;
  views?: number;
}