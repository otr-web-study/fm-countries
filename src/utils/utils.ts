import type { ApiCountry, ApiCountryDetails, Country, CountryDetails } from '@/types';

export const capitalize = (str: string) => `${str[0] ? str[0].toUpperCase() : ''}${str.slice(1)}`;

export const formatVal = (value: string | number | undefined) =>
  typeof value === 'number' ? value.toLocaleString() : value;

export const convertDataCountries = (data: ApiCountry[]): [Country[], Record<string, string>] => {
  const codeNameMap: Record<string, string> = {};
  const converted: Country[] = [];

  for (const country of data) {
    converted.push({
      ...country,
      name: country.name.common ? country.name.common : country.name.official,
      capital: country.capital.length ? country.capital[0] : '',
    });
    codeNameMap[country.cca3] = country.name.common ? country.name.common : country.name.official;
  }

  return [converted, codeNameMap];
};

export const convertDetails = (country: ApiCountryDetails): CountryDetails => ({
  ...country,
  name: country.name.common ? country.name.common : country.name.official,
  nativeName: Object.keys(country.name.nativeName).length
    ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
    : country.name.common,
  capital: country.capital.length ? country.capital[0] : '',
  currencies: Object.values(country.currencies).map((currency) => currency.name),
  languages: Object.values(country.languages),
  tld: country.tld[0] || '',
});
