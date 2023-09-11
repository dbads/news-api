export class NewsQueryDTO {
  articleCount: number
}

export class NewsSearchDTO {
  authorName: string;
  title: string;
  articleCount: number
}

export class NewsType {
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  source: { name: string, url: string };
  url: any;
  image: any;
}