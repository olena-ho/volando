import React, { useEffect } from 'react';
import {
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import '../Map/style.css';

export const MapSideBar = ({ currentLocation, selectedHotel}) => {

  // Callback function for DirectionsService
  const directionCallback = (response, status) => {
    if (status === 'OK') {
      setDirections(response); // Store the directions response
    } else {
      console.error('Directions request failed due to ' + status);
    }
  };

  useEffect(() => {
    if (showDirections && currentLocation && selectedHotel) {
      // Trigger DirectionsService when showDirections is true
      setDirections(null); // Reset previous directions
    }
  }, [showDirections, currentLocation, selectedHotel]);

  if (!selectedHotel) {
    return <div className="container-bar">Select a hotel to see route information</div>;
  }

  return (
    <div className="container-bar">
      <h2>Route Information</h2>
      <div>
        <h3>Start Address:</h3>
        <p>{currentLocation.lat}, {currentLocation.lng}</p>
      </div>
      <div>
        <h3>End Address:</h3>
        <p>{selectedHotel.address}</p>
      </div>
      <button onClick={handleGetDirectionsClick}>
        Get Directions
      </button>
      {showDirections && (
        <>
          <DirectionsService
            options={{
              origin: currentLocation,
              destination: {
                lat: selectedHotel.location.latitude,
                lng: selectedHotel.location.longitude,
              },
              travelMode: 'DRIVING',
            }}
            callback={directionCallback}
          />
          {directions && (
            <DirectionsRenderer directions={directions} />
          )}
        </>
      )}
    </div>
  );
};
