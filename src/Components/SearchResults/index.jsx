import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../Map';
import './style.css';
import hotelsData from '../../api/hotels';
import { HotelList } from '../HotelList';

export const SearchResults = ({ foundHotelsIds }) => {
  const location = useLocation();
  // const filteredHotels = location.state?.filteredHotels || [];
  const [selectedHotel, setSelectedHotel] = useState(null);

  const filteredHotels = hotelsData.filter((hotel) =>
    foundHotelsIds.includes(hotel.id),
  );

  return (
    <>
      <div className="search-results-container">
        <div className="filters-applied">Filters Applied</div>
        <HotelList hotels={filteredHotels} onHotelClick={setSelectedHotel} />
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
