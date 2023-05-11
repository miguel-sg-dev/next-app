const path = require('path');

/**
 * @type {import('next-i18next').InternalConfig}
 * */
module.exports = {
  interpolation: {
    escapeValue: false,
  },
  localePath: path.resolve('./public/locales'),
  returnObjects: true,
  i18n: {
    locales: ['default', 'es', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  ns: [
    'common',
  ],
};