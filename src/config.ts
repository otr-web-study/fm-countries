const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region,cca3';

export const filterByCode = (code: string) =>
  `${BASE_URL}alpha/${code}?fields=name,capital,flags,population,region,cca3,subregion,tld,currencies,languages,borders`;

export const nameByCode = (code: string) => `${BASE_URL}alpha/${code}?fields=name`;
