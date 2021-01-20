export interface WeatherResponse {
  location: Location;
  current: Current;
}

export interface Current {
  lastUpdatedEpoch: number;
  lastUpdated: string;
  temp_c: number;
  temp_f: number;
  isDay: number;
  condition: Condition;
  windMph: number;
  windKph: number;
  windDegree: number;
  windDir: string;
  pressureMB: number;
  pressureIn: number;
  precipMm: number;
  precipIn: number;
  humidity: number;
  cloud: number;
  feelslikeC: number;
  feelslikeF: number;
  visKM: number;
  visMiles: number;
  uv: number;
  gustMph: number;
  gustKph: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tzID: string;
  localtimeEpoch: number;
  localtime: string;
}
