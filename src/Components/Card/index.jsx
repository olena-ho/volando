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
        console.log('Loaded details:', data); // Лог для перевірки завантаження даних
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
    console.log('Details state updated:', details); // Лог для перевірки стану details
  }, [details]);

  return (
    <section>
      <div className="container-card">
        {foundHotels.map((hotel, index) => {
          if (isLoading) {
            return <p key={index}>Loading...</p>;
          }

          if (!details) {
            return <p key={index}>No details available</p>;
          }

          const hotelDetails = details[hotel.name];
          console.log('Hotel details:', hotel.name, hotelDetails); // Лог для перевірки готельних даних

          if (!hotelDetails) {
            return null; // Якщо деталі для поточного готелю відсутні, не відображати готель
          }

          const activities = hotelDetails.activities;

          return (
            <div key={index} className="hotel-card">
              <img src={hotel.images[0]} alt={hotel.name} />

              <div className="hotel-info">
                <h2>{hotel.name}</h2>
                <div className="activities-container">
                  <div className="details-list">
                    {/* Відображення активностей для поточного готелю */}
                    <div>
                      <p>
                        Activities: {activities.join(', ')}
                      </p>
                    </div>
                  </div>
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

