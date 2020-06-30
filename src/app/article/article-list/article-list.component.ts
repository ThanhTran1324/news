import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import * as ArticleActions from '../store/article.actions';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/model/article.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  constructor(private store: Store<fromApp.AppState>) {}
  articles: Article[];

  articleSub: Subscription;
  ngOnInit(): void {
    this.store.dispatch(new ArticleActions.FetchArticleStart());
    this.articleSub = this.store
      .select('article')
      .pipe(
        map((articleState) => {
          return articleState.articles;
        })
      )
      .subscribe((articles) => {
        this.articles = articles;
      });
  }
  ngOnDestroy() {
    this.articleSub.unsubscribe();
  }
}
