import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomeVisual } from '../../Components/HomeVisual';
import { SearchBar } from '../../Components/SearchBar';
import { SearchResults } from '../../Components/SearchResults';
import hotels from '../../api/hotels';
import { filterHotels } from '../../utils/filterHotels';
import { getFilters } from '../../utils/getFilters';
import Lottie from 'lottie-react';
import animation from '../../../public/assets/animation/searching-animation.json';
import './style.css';

export const HomePage = () => {
  const [foundHotelsIds, setFoundHotelsIds] = useState([]);
  const [alternativeHotels, setAlternativeHotels] = useState([]);
  const [searchParams] = useSearchParams();
  const [showAnimation, setShowAnimation] = useState(false);

  const handleSearch = () => {
    const filters = getFilters(searchParams);
    const hasNoFilters = Object.values(filters).every(
      (filter) => filter.length === 0,
    );

    if (hasNoFilters) {
      setFoundHotelsIds([]);
      setAlternativeHotels([]);
      return;
    }

    const { filteredHotels, alternativeHotels } = filterHotels(hotels, filters);

    if (filteredHotels.length === 0) {
      setAlternativeHotels(alternativeHotels);
      setShowAnimation(true);
    } else {
      setFoundHotelsIds(filteredHotels.map(hotel => hotel.id));
      setAlternativeHotels([]);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    if (alternativeHotels.length > 0) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
        setFoundHotelsIds(alternativeHotels.map(hotel => hotel.id));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alternativeHotels]);

  const isSearchResults = foundHotelsIds.length > 0;

  return (
    <div
      className={`main-page__container ${
        isSearchResults || window.innerWidth < 431
          ? 'padding-top-0'
          : 'padding-top-100'
      }`}
    >
      <SearchBar onSearch={handleSearch} />
      {showAnimation ? (
        <div className="animation-container">
          <Lottie animationData={animation} className="animation" />
        </div>
      ) : isSearchResults ? (
        <SearchResults
          foundHotelsIds={foundHotelsIds}
          alternativeHotels={alternativeHotels}
        />
      ) : (
        <HomeVisual />
      )}
    </div>
  );
};
