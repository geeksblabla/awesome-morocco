import { AppConfig } from './src/utils/AppConfig.ts';

const NextSeo = {
  defaultTitle: 'Awesome Morocco',
  titleTemplate: '%s - Awesome Morocco',

  openGraph: {
    locale: AppConfig.locale,
    site_name: AppConfig.site_name,
  },
};

export default NextSeo;
