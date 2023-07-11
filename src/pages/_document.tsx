// next
import type { Metadata } from 'next';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export const metadata: Metadata = {
    title: 'Movie App',
    description: 'Generated by create next app',
};
  
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          
          <link rel="manifest" href="/manifest.json" />

          <meta name="author" content="Movies" />
          <meta name="description" content="Movies test app" />
          <meta name="keywords" content="react,material,kit,application,dashboard,admin,template" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}