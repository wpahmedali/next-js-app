import { useQuery } from 'react-query';
import getLocation from 'react-query/api/geo-location';

export const useCurrentLocation = (ip_address?: string) =>
  useQuery('userLocation', () => getLocation(ip_address));
