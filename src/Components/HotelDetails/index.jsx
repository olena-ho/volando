import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

export const HotelDetails = ({
  hotelDetails,
  images,
  web,
}) => {
  const { t } = useTranslation(['details', 'translation']);
console.log(hotelDetails);
  return (
    <div className="details-container">
      <p>
        {t('translation:description')}: {hotelDetails.description}
      </p>
      <p>
        {t('translation:comfort')}: {hotelDetails.comfort.join(', ')}
      </p>
      <div className="images-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt="hotel" />
        ))}
      </div>
      <a href={web} target="_blank" rel="noopener noreferrer">
        {t('translation:website')}
      </a>
    </div>
  );
};
