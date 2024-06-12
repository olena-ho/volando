import React, { useState } from 'react';
import Map from '../Map';
import './style.css';
import hotelsData from '../../api/hotels';
import { HotelList } from '../HotelList';

export const SearchResults = ({ foundHotelsIds, alternativeHotelsFound }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const filteredHotels = hotelsData.filter((hotel) =>
    foundHotelsIds.includes(hotel.id),
  );

  return (
    <div className="search-results-container">
      <HotelList
        hotels={filteredHotels}
        onHotelClick={setSelectedHotel}
        alternativeHotelsFound={alternativeHotelsFound}
      />
      <div className="map-container">
        <Map
          hotels={filteredHotels}
          selectedHotel={selectedHotel}
          onHotelSelect={setSelectedHotel}
        />
      </div>
    </div>
  );
};
