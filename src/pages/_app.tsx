import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);