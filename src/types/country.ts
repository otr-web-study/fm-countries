import type { Region } from './region';

export interface Country {
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

interface ApiCountryName {
  common: string;
  official: string;
}

export interface ApiCountry extends Omit<Country, 'name' | 'capital'> {
  name: ApiCountryName;
  capital: string[];
}
