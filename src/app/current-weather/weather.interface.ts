export interface cityAutocomplete {
  AdministrativeArea: AdministrativeArea;
  Country: Country;
  Key: string;
  LocalizedName: string;
  Rank: number;
  Type: string;
  Version: number;
}

export interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
}

export interface Country {
  ID: string;
  LocalizedName: string;
}

export interface citiesAndKeys {
  city: string;
  Key: number;
}
