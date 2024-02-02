import { useEffect } from 'react';
import { getCountry } from 'react-query/api/country';
import getLocation from 'react-query/api/geo-location';
import { useCountry } from 'react-query/hooks/api/country';
import { useCurrentLocation } from 'react-query/hooks/api/geo-location';

export const SetInitialCountry = async (cookies): Promise<number> => {
  const twoHoursInSeconds = 2 * 60 * 60;
  const countryIdFromCookie = cookies.get('countryId');

  if (!countryIdFromCookie) {
    const { data: countryData } = await getCountry();
    const currentLocation = await getLocation();

    let countryId = null;

    if (currentLocation && countryData) {
      const findCountry = countryData.find(
        (country) =>
          country.countryName.toLowerCase() ===
          currentLocation.geoplugin_countryName?.toLowerCase()
      );
      countryId = findCountry ? findCountry.id : null;
    }

    if (countryId) {
      cookies.set('countryId', countryId, {
        maxAge: twoHoursInSeconds,
      });
    }

    return countryIdFromCookie ? countryIdFromCookie : countryId;
  }
};

export const SetInitialCountryId = (cookies) => {
  const twoHoursInSeconds = 2 * 60 * 60;
  const countryIdFromCookie = cookies.get('countryId');

  const { data: countryData } = useCountry();
  const { data: currentLocation } = useCurrentLocation();

  useEffect(() => {
    if (countryData && currentLocation) {
      const findCountry = countryData.data?.find(
        (country) =>
          country.countryName.toLowerCase() ===
          currentLocation.geoplugin_countryName?.toLowerCase()
      );

      if (findCountry) {
        const countryId = findCountry.id;
        cookies.set('countryId', countryId, {
          maxAge: twoHoursInSeconds,
        });
      }
    }
  }, [countryData, currentLocation, cookies, twoHoursInSeconds]);

  return countryIdFromCookie || null;
};
