import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError, withLatestFrom } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducer';
import * as LocationActions from './location.actions';
import * as WeatherActions from '../../weather/store/weather.actions';
import { IpDataResponse } from '../../model/IpResponse.model';
import { LocationResponseData } from 'src/app/model/LocationResponseData.model';
@Injectable()
export class LocationEffects {
  constructor(
    private Actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  @Effect({ dispatch: false })
  fetchIp = this.Actions$.pipe(
    ofType(LocationActions.FETCH_IP_START),
    map(() => {
      return this.http
        .get<IpDataResponse>('http://api.ipify.org/?format=json')
        .pipe(
          tap((responseIp) => {
            console.log(responseIp);
            this.store.dispatch(
              new LocationActions.FetchIpSuccess(responseIp.ip)
            );
            this.store.dispatch(new LocationActions.FetchLocationStart());
          })
        )
        .subscribe();
    })
  );

  @Effect({ dispatch: false })
  fetchLocation = this.Actions$.pipe(
    ofType(LocationActions.FETCH_LOCATION_START),
    withLatestFrom(this.store.select('location')),
    map(([action, locationState]) => {
      this.http
        .get<LocationResponseData>(
          'http://api.ipstack.com/' +
            locationState.ip +
            '?access_key=6d33cca56f3ae315160c52fcf57a8218&format=1'
        )
        .pipe(
          tap((locationResponseData: LocationResponseData) => {
            this.store.dispatch(
              new LocationActions.FetchLocationSuccess(locationResponseData)
            );
            this.store.dispatch(new WeatherActions.FetchWeatherStart());
          })
        )
        .subscribe();
    })
  );
}
