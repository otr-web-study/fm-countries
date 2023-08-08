import type { Country } from '.';

export interface CountryDetails extends Country {
  nativeName: string;
  subregion: string;
  tld: string;
  currencies: string[];
  languages: string[];
  borders: string[];
}
