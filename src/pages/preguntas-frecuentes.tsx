import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const FaqPage = () => {
  const { t } = useTranslation('common');
  const title = t('faq.title');
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
    ])),
  },
});

export default FaqPage;