import { useTranslation } from 'react-i18next';

export const Comfort = ({hotelDetails}) => {
  const { t } = useTranslation(['details', 'translation']);

  return <div>
    <p>
        {t('translation:comfort')}: {hotelDetails.comfort.join(', ')}
      </p>
  </div>;
};
