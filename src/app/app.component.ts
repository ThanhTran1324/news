import { Component, OnInit } from '@angular/core';
import * as fromApp from './store/app.reducer';
import * as LocationActions from './location/store/location.actions';
import { Store } from '@ngrx/store';
import * as ArticleActions from './article/store/article.actions';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}
  title = 'news';
  ngOnInit() {
    // strigger of fetch IP,Location And Weather
    this.store.dispatch(new ArticleActions.FetchArticleStart());
    // this.store.dispatch(new LocationActions.FetchIpStart());
  }
}
