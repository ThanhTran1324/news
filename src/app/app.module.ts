import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './article/article.component';
import * as fromApp from './store/app.reducer';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './article/store/article.effects';
import { HttpClientModule } from '@angular/common/http';
import { Material } from './material.module';
import { ArticleCardComponent } from './article/article-list/article-card/article-card.component';
import { ArticleTopComponent } from './article/article-list/article-top/article-top.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleCardComponent,
    ArticleTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([ArticleEffects]),
    Material,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
