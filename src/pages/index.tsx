import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FaqLink from '@/components/FaqLink';

const HomePage = () => {
  return (
    <div>
      <h1>Next.js i18next app</h1>
      <div>
        <FaqLink />
      </div>
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

export default HomePage;