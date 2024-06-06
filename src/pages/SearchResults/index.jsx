import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar';
import Map from '../../components/Map';
import './style.css';
import { Card } from '../../components/Card';

export const SearchResults = () => {
  const location = useLocation(); // Hook to access location object
  const filteredHotels = location.state?.filteredHotels || []; // Retrieve filtered hotels from location state or set to empty array
  const [selectedHotel, setSelectedHotel] = useState(null); // State to store selected hotel

  // Handle hotel click event
  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <>
      <SearchBar />
      <div className="search-results-container">
        <div className="filters-applied">Filters Applied</div>
        <Card hotels={filteredHotels} onHotelClick={handleHotelClick} />
        <div className="map-container">
          <Map
            hotels={filteredHotels}
            selectedHotel={selectedHotel}
            onHotelSelect={handleHotelClick}
          />
        </div>
      </div>
    </>
  );
};
