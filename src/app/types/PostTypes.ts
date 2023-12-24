export interface Post {
  id: number;
  createdAt: Date;
  title: string;
  image: string;
}

export type CreatePost = Omit<Post, 'id' | 'createdAt'>;
