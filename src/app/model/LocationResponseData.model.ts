export interface LocationResponseData {
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
