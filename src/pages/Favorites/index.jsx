import { Card } from '../../components/Card';
import hotels from '../../api/hotels.js';
import { useState, useEffect} from 'react';

export const Favorites = () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const [filteredHotels, setFilteredHotels] = useState(
    hotels.filter(({ id }) => storedFavorites.includes(id)),
  );

 useEffect(() => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  setFilteredHotels(hotels.filter(({ id }) => storedFavorites.includes(id)));
}, []);

  const onRemoveFromFavorites = (id) => {
    const updatedFavorites = storedFavorites.filter(favId => favId !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFilteredHotels(hotels.filter(({ id }) => updatedFavorites.includes(id)));
  };

  return (
    <div>
      <Card hotels={filteredHotels} onRemoveFromFavorites={onRemoveFromFavorites}/>
    </div>
  );
};
