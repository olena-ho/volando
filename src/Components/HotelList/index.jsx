import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import { HotelCard } from '../HotelCard';

export const HotelList = ({ hotels, alternativeHotelsFound, ...props }) => {
  const { i18n } = useTranslation(['details', 'translation']); // Hook for translations
  const [details, setDetails] = useState(null); // State to store hotel details
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status
  const [openedHotelsDetails, setOpenedHotelsDetails] = useState([]);

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
    const newFavorites = storedFavorites.includes(id)
      ? storedFavorites.filter((hotelId) => hotelId !== id)
      : [...storedFavorites, id];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (id) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return storedFavorites.includes(id);
  };

  const handleOpenHotelDetails = (id) => {
    setOpenedHotelsDetails((prev) =>
      prev.includes(id)
        ? prev.filter((hotelId) => hotelId !== id)
        : [...prev, id],
    );
  };

  console.log(openedHotelsDetails);

  return (
    <div className="container-card">
      {alternativeHotelsFound ? <p>These are alternatives</p> : null}
      {isLoading && <p>Loading...</p>}
      {!details ? (
        <p>No details available</p>
      ) : (
        hotels.map((hotel) => {
          const isHotelDetailsOpened = openedHotelsDetails.includes(hotel.id);
          const hotelDetails = details[hotel.name] || {};
          return (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              hotelDetails={hotelDetails}
              onAddToFavorites={onAddToFavorites}
              isFavorite={isFavorite}
              handleOpenHotelDetails={handleOpenHotelDetails}
              isHotelDetailsOpened={isHotelDetailsOpened}
              {...props}
            />
          );
        })
      )}
    </div>
  );
};