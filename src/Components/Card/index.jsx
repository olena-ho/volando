import React, { useState, useEffect } from 'react';
import hotels from '../../api/hotels';
import { useTranslation } from 'react-i18next';
import './style.css';

export const Card = () => {
  const { t, i18n } = useTranslation(['details']);
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const foundHotels = hotels.slice(0, 3); // Вибираємо перші три готелі з масиву

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const response = await fetch(`/locales/${i18n.language}/details.json`);
        const data = await response.json();
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
    console.log(details);
  }, [details]);

  return (
    <section>
      <div className="container-card">
        {foundHotels.map((hotel, index) => {
          if (!details) {
            return <p key={index}>Loading...</p>;
          }

          const translatedActivities = details[hotel.name]?.activities;
          const activities = Array.isArray(translatedActivities)
            ? translatedActivities
            : hotel.activities;

          return (
            <div key={index} className="hotel-card">
              <img src={hotel.images[0]} alt={hotel.name} />

              <div className="hotel-info">
                <h2>{hotel.name}</h2>
                <div className="activities-container">
                  {isLoading ? (
                    <p>Loading details...</p>
                  ) : (
                    <div className="details-list">
                      {Object.keys(details || {}).map((key) => {
                        const activities = Array.isArray(
                          details[key].activities,
                        )
                          ? details[key].activities
                          : [];
                        return (
                          <div key={key}>
                            <p>
                              {key}: {activities.join(', ')}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="details-container">
                  <p className="hotel-address">
                    {t('address')}: {hotel.address}
                  </p>
                  <p className="hotel-rating">
                    {t('rating')}: {hotel.rating}
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

