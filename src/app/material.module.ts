import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
];

@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents,
  declarations: [],
  providers: [],
})
export class Material {}
