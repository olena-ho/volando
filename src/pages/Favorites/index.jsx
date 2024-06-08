import { Card } from '../../components/Card';
import hotels from '../../api/hotels.js';
import { useState } from 'react';

export const Favorites = () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const [filteredHotels, setFilteredHotels] = useState(
    hotels.filter(({ id }) => storedFavorites.includes(id)),
  );

  const onAddToFavorites = {};

  return (
    <div>
      <Card hotels={filteredHotels} onAddToFavorites={onAddToFavorites} />
    </div>
  );
};
