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
import Script from 'next/script';
import { TitleProvider } from 'src/providers/TitleContext';

const JanJapan = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient(config));

  return (
    <>
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-MZQSG3`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZQSG3');
        `,
          }}
        />
      </>
      <TitleProvider>
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
      </TitleProvider>
    </>
  );
};

export default JanJapan;
