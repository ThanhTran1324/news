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
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    ArticleListComponent,
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
