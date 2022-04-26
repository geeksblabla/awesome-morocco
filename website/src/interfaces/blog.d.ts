export interface IBlogPost {
  title: string;
  link: string;
  pubDate: string;
}

export interface IBlog {
  title: string;
  link: string;
  items: Array<IBlogPost>;
}
