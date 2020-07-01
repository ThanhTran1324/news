import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleViewComponent } from './article/article-view/article-view.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'articleView/:id',
    component: ArticleViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
