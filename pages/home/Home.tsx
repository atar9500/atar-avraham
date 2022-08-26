import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('common1');
  return (
    <div>
      {t('cancel')} {t('approve')}
    </div>
  );
};

export default Home;
