export interface RestCountry {
  name: { common: string; official: string; nativeName: string };
  cca2: string;
  cca3: string;
  translations: { spa: { official: string; common: string } };
  flag: string;
}
