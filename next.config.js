const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  async rewrites() {
    return [
      {
        source: '/faq',
        destination: '/preguntas-frecuentes',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/en/preguntas-frecuentes',
        destination: '/en/faq',
        permanent: true,
        locale: false,
      },
      {
        source: '/es/faq',
        destination: '/es/preguntas-frecuentes',
        permanent: true,
        locale: false,
      },
    ];
  },
};
