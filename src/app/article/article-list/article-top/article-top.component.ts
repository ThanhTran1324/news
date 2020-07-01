import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article } from 'src/app/model/article.model';

import * as fromApp from '../../../store/app.reducer';
import * as ArticleActions from '../../store/article.actions';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as utilityFunction from '../../../utility/utility.convert';
@Component({
  selector: 'app-article-top',
  templateUrl: './article-top.component.html',
  styleUrls: ['./article-top.component.css'],
})
export class ArticleTopComponent implements OnInit, OnDestroy {
  topArticle: Article;
  articleSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.articleSub = this.store
      .select('article')
      .pipe(
        map((articleState) => {
          return articleState.articles;
        })
      )
      .subscribe((articles) => {
        this.topArticle = articles[0];
      });
  }
  ngOnDestroy() {
    if (this.articleSub) {
      this.articleSub.unsubscribe();
    }
  }
}
