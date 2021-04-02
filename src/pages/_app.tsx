import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next React - Boilerplate</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with NextJs, React, TypeScript and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
