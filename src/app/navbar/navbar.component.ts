import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import { WeatherInfo } from '../model/WeatherInfo.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}
  showSecondBar = false;
  weatherInfo: WeatherInfo;
  ngOnInit(): void {
    this.store.select('weather').subscribe((weatherState) => {
      this.weatherInfo = weatherState;
    });
  }
  toggleSecondBar() {
    this.showSecondBar = !this.showSecondBar;
  }
}
