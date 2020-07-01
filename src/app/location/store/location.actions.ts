import { Action } from '@ngrx/store';
import { IpDataResponse } from 'src/app/model/ipResponse.model';
import { LocationResponseData } from 'src/app/model/LocationResponseData.model';

export const FETCH_IP_START = '[Location] Fetch Ip Start';
export const FETCH_IP_SUCCESS = '[Location] Fetch Ip Success';
export const FETCH_LOCATION_START = '[Location] Fetch Location Start';
export const FETCH_LOCATION_SUCCESS = '[Location] Fetch Location Success';
export type LocationActions =
  | FetchIpStart
  | FetchIpSuccess
  | FetchLocationStart
  | FetchLocationSuccess;

export class FetchIpStart implements Action {
  readonly type = FETCH_IP_START;
}

export class FetchIpSuccess implements Action {
  readonly type = FETCH_IP_SUCCESS;
  constructor(public payload: string) {}
}

export class FetchLocationStart implements Action {
  readonly type = FETCH_LOCATION_START;
}

export class FetchLocationSuccess implements Action {
  readonly type = FETCH_LOCATION_SUCCESS;
  constructor(public payload: LocationResponseData) {}
}
