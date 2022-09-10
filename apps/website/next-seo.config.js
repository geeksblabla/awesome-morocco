import { AppConfig } from './src/utils/AppConfig.ts';

const NextSeo = {
  defaultTitle: 'Awesome Morocco',
  titleTemplate: '%s - Awesome Morocco',

  openGraph: {
    type: 'website',
    locale: AppConfig.locale,
    site_name: AppConfig.site_name,
    // url: '',
  },

  twitter: {
    // handle: "@",
    site: '@awesome-morocco',
    cardType: 'summary_large_image',
  },
};

export default NextSeo;
