import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/model/article.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  constructor() {}
  @Input() article: Article;
  ngOnInit(): void {}
}
