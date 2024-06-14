import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import { Description } from './Description';
import { PhotosCarousel } from './PhotosCarousel'; 
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
];

export const HotelDetails = ({ hotelDetails ={}, images, web, defaultReviews, hotelId }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const { t } = useTranslation(['details', 'translation']);

  const getContent = () => {
    switch (selectedTab) {
      case 'description':
        return (
          <Description hotelDetails={hotelDetails} images={images} web={web} />
        );
      case 'reviews':
        return (
          <Reviews
            hotelId={hotelId}
            defaultReviews={defaultReviews}
          />
        );
      case 'photos':
        return <PhotosCarousel images={images} />; 
      default:
        break;
    }
  };

  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <div key={tab.id} onClick={() => setSelectedTab(tab.id)}
          className={selectedTab === tab.id ? 'active' : ''}
          >
            {t(`translation:${tab.name}`)}
          </div>
        ))}
      </div>
      {getContent()}
    </>
  );
};
