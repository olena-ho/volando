import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

export const Card = ({ hotels, onHotelClick }) => {
  const { t, i18n } = useTranslation(['details', 'translation']); // Hook for translations
  const [details, setDetails] = useState(null); // State to store hotel details
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status

  // Load hotel details based on current language
  useEffect(() => {
    const loadDetails = async () => {
      try {
        const response = await fetch(`/locales/${i18n.language}/details.json`);
        const data = await response.json();
        console.log('Loaded details:', data);
        setDetails(data); // Set details state
      } catch (error) {
        console.error('Error loading details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDetails();
  }, [i18n.language]); // Re-fetch details when language changes

  // Log details state updates
  useEffect(() => {
    console.log('Details state updated:', details);
  }, [details]);

  const onAddToFavorites = (id) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(storedFavorites);
    const newFavorites = storedFavorites.includes(id) ? storedFavorites.filter(item => item !== id) : [...storedFavorites, id];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));

  };

  return (
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
        console.log(hotel, hotel.id);
        return (
          <div
            key={index}
            className="hotel-card"
            onClick={() => onHotelClick(hotel)}
          >
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
                  {t('translation:ratingP')}: {hotel.rating}
                </p>
              </div>
            </div>
            <div className="favorite-container">
              <img
                src="/favorites.png"
                alt="Favorite Icon"
                onClick={() => onAddToFavorites(hotel.id)}
                className="favorite-icon"
                width="20"
                height="20"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
