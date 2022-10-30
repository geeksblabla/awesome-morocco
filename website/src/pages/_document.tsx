import { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

const Document = () => {
  return (
    <Html lang={AppConfig.locale}>
      <Head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
          key="icon16"
        />
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
