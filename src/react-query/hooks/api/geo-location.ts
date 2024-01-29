import { useQueryClient } from 'react-query';

export const useCurrentLocation = () => {
  const queryClient = useQueryClient();

  const cachedData = queryClient.getQueryData(['userLocation']);

  if (cachedData) {
    return cachedData;
  }
};
