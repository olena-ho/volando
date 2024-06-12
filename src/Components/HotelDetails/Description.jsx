import { useTranslation } from 'react-i18next';

export const Description = ({ hotelDetails, web }) => {
  const { t } = useTranslation(['details', 'translation']);

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
