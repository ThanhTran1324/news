import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { tap, map, exhaustMap, switchMap } from 'rxjs/operators';

import * as ArticleActions from './article.actions';
import * as fromApp from '../../store/app.reducer';
import { Article } from 'src/app/model/article.model';
import { ArticleResponseData } from 'src/app/model/articleResponseData.model';

@Injectable()
export class ArticleEffects {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect({ dispatch: false })
  articleFetch = this.actions$.pipe(
    ofType(ArticleActions.FETCH_ARTICLE_START),
    //don't fetch when articles[].length!==0
    //...

    switchMap(() => {
      // return this.http.get(
      //   'http://newsapi.org/v2/top-headlines?' +
      //     'country=us&' +
      //     'apiKey=fb6036dd3aa44f6eaa9bcb9b7c690eb9'
      // );
      return this.http.get('assets/article.json').pipe(
        map((responseData: ArticleResponseData) => {
          return this.store.dispatch(
            new ArticleActions.FetchArticleSuccess(responseData.articles)
          );
        })
      );
    })
  );
}
