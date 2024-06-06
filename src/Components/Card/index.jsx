import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

export const Card = ({ hotels }) => {
  const { t, i18n } = useTranslation(['details', 'translation']);
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const response = await fetch(`/locales/${i18n.language}/details.json`);
        const data = await response.json();
        console.log('Loaded details:', data);
        setDetails(data);
      } catch (error) {
        console.error('Error loading details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDetails();
  }, [i18n.language]);

  useEffect(() => {
    console.log('Details state updated:', details);
  }, [details]);

  return (
    <section>
      <div className="container-card">
        {hotels.map((hotel, index) => {
          if (isLoading) {
            return <p key={index}>Loading...</p>;
          }

          if (!details) {
            return <p key={index}>No details available</p>;
          }

          const hotelDetails = details[hotel.name];
          console.log('Hotel details:', hotel.name, hotelDetails);

          if (!hotelDetails) {
            return null;
          }

          const { activities = [] } = hotelDetails;

          return (
            <div key={index} className="hotel-card">
              <img src={hotel.images[0]} alt={hotel.name} />
              
              <div className="hotel-info">
                <h2>{hotel.name}</h2>
                <div className="activities-container">
                  <div className="details-list">
                    <div>
                      <p>
                      {t('translation:activities')}: {activities.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="details-container">
                  <p className="hotel-address">
                  {t('translation:address')}: {hotel.address}
                  </p>
                  <p className="hotel-rating">
                  {t('translation:rating')}: {hotel.rating}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
