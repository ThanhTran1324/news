import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromApp from '../../store/app.reducer';
import * as WeatherActions from './weather.actions';
import { exhaustMap, map, tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { WeatherResponse } from 'src/app/model/weatherResponse.model';

@Injectable()
export class WeatherEffects {
  constructor(
    private Actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  @Effect({ dispatch: false })
  fetchWeatherStart = this.Actions$.pipe(
    ofType(WeatherActions.FETCH_WEATHER_START),
    map(() => {
      navigator.geolocation.getCurrentPosition((resp) => {
        if (resp) {
          return (
            this.http
              // .get(
              //   'http://api.weatherapi.com/v1/current.json?key=9dec2666b44b454ebb6142834202806&q=' +
              //     resp.coords.latitude +
              //     ',' +
              //     resp.coords.longitude
              // )
              .get('assets/weather.json')
              .pipe(
                map((weatherResponseData: WeatherResponse) => {
                  console.log(weatherResponseData);
                  const date = weatherResponseData.location.localtime.slice(
                    0,
                    10
                  );
                  const time = weatherResponseData.location.localtime.slice(
                    11,
                    16
                  );
                  this.store.dispatch(
                    new WeatherActions.FetchWeatherSuccess({
                      condition: weatherResponseData.current.condition.text,
                      icon: weatherResponseData.current.condition.icon,
                      isDay:
                        weatherResponseData.current.isDay === 1 ? true : false,
                      tempF: weatherResponseData.current.temp_f,
                      location: weatherResponseData.location.name,
                      time,
                      date,
                    })
                  );
                })
              )
              .subscribe()
          );
        }
      });
    })
  );
}
