import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import { Article } from 'src/app/model/article.model';
import { exhaustMap, tap, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
})
export class ArticleViewComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}
  id: string;
  trendingArticle: Article;
  article: Article = {
    author: 'Daren Fonda',
    title:
      "Airlines Are Ditching Peanuts for Purell to Bring Customers Back - Barron's",
    articleDescription: 'cvxv',
    url:
      'https://www.barrons.com/articles/airlines-are-ditching-peanuts-for-purell-to-bring-customers-back-51592742603',
    urlToImage: 'https://images.barrons.com/im-200471/social',
    publishedAt: new Date(),
    content:
      'Purell is the new peanuts as airlines try to win back consumers in the age of coronavirus.Delta Air Lines\r\n (ticker: DAL) said last week that it would hand out complimentary care kits to customers wh… [+3475 chars]',
    articleTimeDisplay: '9 days ago',
    id: '62dddfe5-2dfc-a019-4f11-b924',
  };
  subRoute: Subscription;
  ngOnInit() {
    this.subRoute = this.route.params
      .pipe(
        map((params: Params) => {
          return params['id'];
        }),
        switchMap((id) => {
          this.id = id;
          return this.store.select('article');
        }),
        map((articleState) => {
          articleState.articles.map((article, index) => {
            if (article.id === this.id) {
              this.article = article;
              this.trendingArticle = articleState.articles[index + 1];
            }
          });
        })
      )
      .subscribe();
  }
  ngOnDestroy() {
    if (this.subRoute) {
      this.subRoute.unsubscribe();
    }
  }
}

// {
//   "source": {
//     "id": null,
//     "name": "The Dallas Morning News"
//   },
//   "author": "Nataly Keomoungkhoun, LaVendrick Smith",
//   "title": "Dallas, Tarrant counties each report 400-plus new coronavirus cases as Jenkins sees 'second wave' - The Dallas Morning News",
//   "description": "Dallas County health officials reported 408 new coronavirus cases Sunday and the death of a Dallas woman in her 60s who had been critically ill in a...",
//   "url": "https://www.dallasnews.com/news/public-health/2020/06/21/dallas-tarrant-counties-each-report-400-plus-cases-as-jenkins-says-dallas-sees-second-wave/",
//   "urlToImage": "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/L8DDfUFoZECLmQ6hA4ytnOcmUBE=/1200x630/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/D3RXX2OXKKLAYFAJFX5F7ZSVZM.jpg",
//   "publishedAt": "2020-06-21T23:37:30Z",
//   "content": "Updated 4:55 p.m.: Revised to include new Collin County cases.\r\nDallas County health officials reported 408 new coronavirus cases Sunday and the death of a Dallas woman in her 60s who had been critic… [+2308 chars]",
//   "articleTimeDisplay": "9 days ago",
//   "id": "21c063fd-9efe-53c0-b1ee-b4b6"
// }
