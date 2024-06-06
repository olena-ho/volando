import React, { useEffect, useState, useMemo } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
}; 

const defaultCenter = {
  lat: 49.5,
  lng: 14.5
};

const handleLoadError = (e) => {
  console.error("Error loading Google Maps", e);
};

const handleMapLoad = (map) => {
  console.log("Map loaded successfully", map);
};

const Map = ({ hotels }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [displayInfo, setDisplayInfo] = useState(null);
  const [directions, setDirections] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user's location", error);
          setCurrentLocation(defaultCenter);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setCurrentLocation(defaultCenter);
    }
  }, []);

  const handleMarkerClick = (hotel) => {
    setDisplayInfo(hotel);
    setSelectedHotel(hotel);
    setDirections(null); // Clear previous directions when a new marker is clicked
  };

  const directionCallback = (response, status) => {
    if (status === 'OK') {
      setDirections(response);
    } else {
      console.error('Directions request failed due to ' + status);
    }
  };

  const currentLocationMarker = useMemo(() => (
    currentLocation && <Marker key="currentLocation" position={currentLocation} />
  ), [currentLocation]);

  const hotelMarkers = useMemo(() => hotels.map((hotel) => (
    <Marker
      key={hotel.address}
      position={{ lat: hotel.location.latitude, lng: hotel.location.longitude }}
      onClick={() => handleMarkerClick(hotel)}
    >
      {displayInfo === hotel && (
        <InfoWindow onCloseClick={() => setDisplayInfo(null)}>
          <div>
            <h3>{hotel.name}</h3>
            <p>{`${hotel.description.substring(0, 100)}...`}</p>
            <button onClick={() => setSelectedHotel(hotel)}>Get Directions</button>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )), [hotels, displayInfo]);

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBiJG97_IYoMHOFyLB-JmGfXWGQa9ocJ24" onError={handleLoadError}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentLocation || defaultCenter}
          zoom={10}
          onLoad={handleMapLoad}
        >
          {currentLocation && <Marker position={currentLocation} />}
          
          {hotels.map((hotel) => (
            <Marker
              key={hotel.address}
              position={{ lat: hotel.location.latitude, lng: hotel.location.longitude }}
              onClick={() => handleMarkerClick(hotel)}
            >
              {displayInfo === hotel && (
                <InfoWindow onCloseClick={() => setDisplayInfo(null)}>
                  <div>
                    <h3>{hotel.name}</h3>
                    <p>{`${hotel.description.substring(0, 100)}...`}</p>
                    <button onClick={() => setSelectedHotel(hotel)}>Get Directions</button>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
          
          {currentLocation && selectedHotel && (
            <DirectionsService
              options={{
                origin: currentLocation,
                destination: {
                  lat: selectedHotel.location.latitude,
                  lng: selectedHotel.location.longitude
                },
                travelMode: 'DRIVING'
              }}
              callback={directionCallback}
            />
          )}

          {directions && <DirectionsRenderer directions={directions} />}

        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
