import { useQuery } from 'react-query';
import getLocation from 'react-query/api/geo-location';

export const useCurrentLocation = () => useQuery('userLocation', getLocation);
