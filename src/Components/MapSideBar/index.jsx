import React, { useEffect } from 'react';
import '../Map/style.css';

export const MapSideBar = ({ currentLocation, selectedHotel }) => {
  if (!selectedHotel) {
    return (
      <div className="container-bar">
        Select a hotel to see route information
      </div>
    );
  }

  return (
    <div className="container-bar">
      <h2>Route Information</h2>
      <div>
        <h3>Start Address:</h3>
        <p>
          {currentLocation.lat}, {currentLocation.lng}
        </p>
      </div>
      <div>
        <h3>End Address:</h3>
        <p>{selectedHotel.address}</p>
      </div>
    </div>
  );
};
