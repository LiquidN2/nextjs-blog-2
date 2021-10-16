export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  image: {
    url: string;
    fileName: string;
  };
};
