import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import { Description } from './Description';
import { Photos } from './Photos';
import { Comfort } from './Comfort';
import { Reviews } from './Reviews';

const tabs = [
  {
    id: 'description',
    name: 'description',
  },
  {
    id: 'reviews',
    name: 'reviews',
  },
  {
    id: 'photos',
    name: 'photos',
  },
  {
    id: 'comfort',
    name: 'comfortP',
  },
];

export const HotelDetails = ({ hotelDetails, images, web }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const { t } = useTranslation(['details', 'translation']);
  console.log(selectedTab);

  const getContent = () => {
    switch (selectedTab) {
      case 'description':
        return (
          <Description hotelDetails={hotelDetails} images={images} web={web} />
        );
      case 'reviews':
        return (
          <Reviews
            hotelId={hotelDetails.id}
            defaultReviews={hotelDetails.defaultReviews}
          />
        );
      case 'photos':
        return <Photos images={images} />;
      case 'comfort':
        return <Comfort />;
      default:
        break;
    }
  };

  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <div key={tab.id} onClick={() => setSelectedTab(tab.id)}>
            {t(`translation:${tab.name}`)}
          </div>
        ))}
      </div>
      {getContent()}
    </>
  );
};
