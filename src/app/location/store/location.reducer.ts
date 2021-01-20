import * as LocationActions from './location.actions';

export class State {
  ip?: string;
  type?: string;
  continentCode?: string;
  continentName?: string;
  countryCode?: string;
  countryName?: string;
  regionCode?: string;
  regionName?: string;
  city?: string;
  zip?: string;
  latitude?: number;
  longitude?: number;
  location?: Location;
}

export interface Location {
  geonameID?: number;
  capital?: string;
  languages?: Language[];
  countryFlag?: string;
  countryFlagEmoji?: string;
  countryFlagEmojiUnicode?: string;
  callingCode?: string;
  isEu?: boolean;
}

export interface Language {
  code?: string;
  name?: string;
  native?: string;
}

const initialState: State = {
  ip: 'null',
};
export function LocationReducer(
  state: State = initialState,
  action: LocationActions.LocationActions
) {
  switch (action.type) {
    case LocationActions.FETCH_IP_SUCCESS:
      return {
        ...state,
        ip: action.payload,
      };
    case LocationActions.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
