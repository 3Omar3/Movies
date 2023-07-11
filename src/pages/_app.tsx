// next
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
// react
import { HelmetProvider } from 'react-helmet-async';
import { ReactElement, ReactNode } from 'react';
// redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
// style
import '../../public/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Provider store={store}>
        <HelmetProvider>
          <PersistGate loading={null} persistor={persistor}>
            {getLayout(<Component {...pageProps} />)}
          </PersistGate>
        </HelmetProvider>
      </Provider>
    </>
  );
}
