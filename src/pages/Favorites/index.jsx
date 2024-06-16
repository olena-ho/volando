import './style.css';
import hotels from '../../api/hotels.js';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import { HotelList } from '../../Components/HotelList/index.jsx';

export const Favorites = () => {
  const { t } = useTranslation();
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(storedFavorites);
  const [filteredHotels, setFilteredHotels] = useState(
    hotels.filter(({ id }) => favorites.includes(id))
  );

  useEffect(() => {
    setFilteredHotels(hotels.filter(({ id }) => favorites.includes(id)));
  }, [favorites]);

  const onRemoveFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((favId) => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-container">
      <h1 className="title">{t('favoritesM')}</h1>
      <HotelList
        hotels={filteredHotels}
        onRemoveFromFavorites={onRemoveFromFavorites}
        alternativeHotels={[]}
      />
    </div>
  );
};
