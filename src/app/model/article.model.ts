export class Article {
  author: string;
  title: string;
  articleDescription: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export class LocationIQResponseDate {
  status: string;
  timezone: {
    name: string;
    now_in_dst?: number;
    offset_sec?: number;
    short_name?: string;
  };
}
