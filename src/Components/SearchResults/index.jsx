import React, { useState } from 'react';
import Map from '../Map';
import './style.css';
import hotelsData from '../../api/hotels';
import { HotelList } from '../HotelList';

export const SearchResults = ({ foundHotelsIds, alternativeHotelsFound }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

  const filteredHotels = hotelsData.filter((hotel) =>
    foundHotelsIds.includes(hotel.id),
  );

  const handleShowOnMap = (hotel) => {
    setSelectedHotel(hotel);
    setIsMapVisible(true);
  };

  return (
    <div className="search-results-container">
      <HotelList
        hotels={filteredHotels}
        onHotelClick={setSelectedHotel}
        alternativeHotelsFound={alternativeHotelsFound}
        onShowOnMap={handleShowOnMap}
      />
<div className={`map-container ${isMapVisible ? 'visible' : ''}`}>
          <Map
            hotels={filteredHotels}
            selectedHotel={selectedHotel}
            onHotelSelect={setSelectedHotel}
          />
        </div>
    </div>
  );
};
