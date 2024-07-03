import '../styles/globals.css';
import JanJapanDashboard from 'components/dashboard/JanJapanDashboard';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { config } from 'react-query/lib/react-query-config';
import { VehicleListViewProvider } from 'src/providers/VehicleListView';
import { LoadingContextProvider } from 'src/providers/LoadingContext';
import { FavoriteCarsProvider } from 'src/providers/FavouriteVehicleList';
import { AuthenticationProvider } from 'src/providers/Authentication';
import { ModelContextProvider } from 'src/providers/ModelContext';
import { InterfaceModeProvider } from 'src/providers/InterfaceMode';

const JanJapan = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient(config));

  return (
    <InterfaceModeProvider>
      <ModelContextProvider>
        <FavoriteCarsProvider>
          <AuthenticationProvider>
            <LoadingContextProvider>
              <VehicleListViewProvider>
                <QueryClientProvider client={queryClient}>
                  <Hydrate state={pageProps.dehydratedState}>
                    <JanJapanDashboard
                      Component={Component}
                      pageProps={pageProps}
                    />
                  </Hydrate>
                </QueryClientProvider>
              </VehicleListViewProvider>
            </LoadingContextProvider>
          </AuthenticationProvider>
        </FavoriteCarsProvider>
      </ModelContextProvider>
    </InterfaceModeProvider>
  );
};

export default JanJapan;
