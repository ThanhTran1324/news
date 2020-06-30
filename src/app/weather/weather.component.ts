import { Component, OnInit } from '@angular/core';
import * as WeatherActions from './store/weather.actions';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { WeatherInfo } from '../model/WeatherInfo.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherInfo: WeatherInfo;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new WeatherActions.FetchWeatherStart());
    this.store.select('weather').subscribe((weatherState) => {
      this.weatherInfo = weatherState;

    });
  }
}
