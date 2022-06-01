import { useEffect, useState } from "react";

import { RestCountry } from "../types";

export const useAllRestCountries = () => {
  const [countries, setCountries] = useState<RestCountry[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3/all");
      const data = (await response.json()) as RestCountry[];

      if (data && data.length > 0) {
        const sorted = data.sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        });

        setCountries(sorted);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading: countries.length === 0 };
};
