import type { Region } from './region';

export interface Country {
  cca3: string;
  name: string;
  capital: string;
  population: number;
  region: Region;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}

interface NativeCountryName extends Record<string, Omit<ApiCountryName, 'nativeName'>> {}

export interface ApiCountryName {
  common: string;
  official: string;
  nativeName: NativeCountryName;
}

interface Currency {
  name: string;
  symbol: string;
}

export interface ApiCountry extends Omit<Country, 'name' | 'capital'> {
  name: ApiCountryName;
  capital: string[];
}

export interface ApiCountryDetails extends ApiCountry {
  subregion: string;
  tld: string[];
  currencies: Record<string, Currency>;
  languages: Record<string, string>;
  borders: string[];
}
