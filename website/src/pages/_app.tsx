import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import Layout from '@/components/Layout';

// @ts-ignore
import SEO from '../../next-seo.config';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
