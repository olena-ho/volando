import React, { useEffect, useState, useMemo, useRef } from 'react';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import './style.css'; 

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const defaultCenter = {
  lat: 49.5,
  lng: 14.5,
};

const handleLoadError = (e) => {
  console.error('Error loading Google Maps', e);
};

const handleMapLoad = (map) => {
  console.log('Map loaded successfully', map);
};

const Map = ({ hotels, selectedHotel, onHotelSelect }) => {
  const [currentLocation, setCurrentLocation] = useState(null); 
  const [displayInfo, setDisplayInfo] = useState(null); 
  const [isLargeMap, setIsLargeMap] = useState(false); 
  const mapRef = useRef(null); 

  // Get user's current location
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
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setCurrentLocation(defaultCenter);
    }
  }, []);

  // Center map on selected hotel with a custom zoom level
  useEffect(() => {
    if (selectedHotel && mapRef.current) {
      const map = mapRef.current;
      const { latitude, longitude } = selectedHotel.location;
      map.setCenter({ lat: latitude, lng: longitude });
      map.setZoom(12); 
    }
  }, [selectedHotel]);

  const handleMarkerClick = (hotel) => {
    setDisplayInfo(hotel); 
    onHotelSelect(hotel);
  };

  // Memorized current location marker
  const currentLocationMarker = useMemo(
    () =>
      currentLocation && (
        <Marker
          key="currentLocation"
          position={currentLocation}
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          }}
        />
      ),
    [currentLocation],
  );

  // Memorized hotel markers
  const hotelMarkers = useMemo(
    () =>
      hotels.map((hotel) => (
        <Marker
          key={hotel.address}
          position={{
            lat: hotel.location.latitude,
            lng: hotel.location.longitude,
          }}
          onClick={() => handleMarkerClick(hotel)}
        >
          {displayInfo === hotel && (
            <InfoWindow
              position={{
                lat: hotel.location.latitude,
                lng: hotel.location.longitude,
              }}
              onCloseClick={() => setDisplayInfo(null)}
            >
              <div>
                <h3>{hotel.name}</h3>
                <p>{`${hotel.description.substring(0, 12)}...`}</p>
                <button onClick={() => onHotelSelect(hotel)}>
                  Get Directions
                </button>
              </div>
            </InfoWindow>
          )}
        </Marker>
      )),
    [hotels, displayInfo, onHotelSelect],
  );
  console.log(__GOOGLE_MAPS_API_KEY__);
  return (
    <>
        <div className={`map-container ${isLargeMap ? 'large' : ''}`}>
 
          <div className="map-content">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={currentLocation || defaultCenter}
              zoom={10}
              onLoad={(map) => {
                handleMapLoad(map);
                mapRef.current = map; 
              }}
              onClick={() => setIsLargeMap(!isLargeMap)} // Toggle map size on click
            >
              {currentLocationMarker}
              {hotelMarkers}
            </GoogleMap>
          </div>
        </div>
    </>
  );
};

export default Map;
