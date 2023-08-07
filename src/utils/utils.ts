export const capitalize = (str: string) => `${str[0] ? str[0].toUpperCase() : ''}${str.slice(1)}`;

export const formatVal = (value: string | number) =>
  typeof value === 'string' ? value : value.toLocaleString();
