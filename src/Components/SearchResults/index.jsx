import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import Map from '../Map';
import './style.css';
import { Card } from '../Card';
import hotelsData from '../../api/hotels';

export const SearchResults = ({foundHotelsIds}) => {
  const location = useLocation(); 
  // const filteredHotels = location.state?.filteredHotels || []; 
  const [selectedHotel, setSelectedHotel] = useState(null); 

  const filteredHotels = hotelsData.filter((hotel) => foundHotelsIds.includes(hotel.id));

  return (
    <>
      <div className="search-results-container">
        <div className="filters-applied">Filters Applied</div>
        <Card hotels={filteredHotels} onHotelClick={setSelectedHotel} />
        <div className="map-container">
          <Map
            hotels={filteredHotels}
            selectedHotel={selectedHotel}
            onHotelSelect={setSelectedHotel}
          />
        </div>
      </div>
    </>
  );
};
