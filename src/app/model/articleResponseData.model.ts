import { Article } from './article.model';

export class ArticleResponseData {
  status: string;
  totalResults: number;
  articles: Article[];
}
