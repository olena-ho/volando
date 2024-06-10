import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

export const Description = ({ hotelDetails, images, web }) => {
  const { t } = useTranslation(['details', 'translation']);
  console.log(hotelDetails);
  return (
    <div className="details-container">
      <p>
        {t('translation:description')}: {hotelDetails.description}
      </p>
      <a href={web} target="_blank" rel="noopener noreferrer">
        {t('translation:website')}
      </a>
    </div>
  );
};
