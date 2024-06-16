import React, { useEffect, useState, useMemo, useRef } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import './style.css';
import { useTranslation } from "react-i18next";

const getContainerStyle = ({ fullHeight }) => ({
  width: '100%',
  height: fullHeight ? '100vh' : '200px',
});

const defaultCenter = {
  lat: 49.5,
  lng: 14.5,
};

const handleMapLoad = (map) => {
  console.log('Map loaded successfully', map);
};

const isMobile = () => window.innerWidth <= 767;

const Map = ({ hotels, selectedHotel, onHotelSelect, hotelLocation }) => {
  const { t } = useTranslation(["details", "translation"]);
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
            lat: hotelLocation?.latitude || position.coords.latitude,
            lng: hotelLocation?.longitude || position.coords.longitude,
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
    if (!isMobile()) {
      setDisplayInfo(hotel);
      onHotelSelect(hotel);
    }
  };

  // Memorized current location marker
  const currentLocationMarker = useMemo(
    () =>
      currentLocation && !hotelLocation && (
        <Marker
          key="currentLocation"
          position={currentLocation}
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          }}
        />
      ),
    [currentLocation, hotelLocation],
  );

  // Memorized hotel markers
  const hotelMarkers = useMemo(
    () =>
      hotels.map((hotel) => {
        const description = t(`details:${hotel.name}.description`, '');

        return (
          <Marker
            key={hotel.address}
            position={{
              lat: hotel.location.latitude,
              lng: hotel.location.longitude,
            }}
            onClick={() => handleMarkerClick(hotel)}
          >
            {!isMobile() && displayInfo === hotel && (
              <InfoWindow
                position={{
                  lat: hotel.location.latitude,
                  lng: hotel.location.longitude,
                }}
                onCloseClick={() => setDisplayInfo(null)}
                className="info-window"
              >
                <div className="info-window">
                  <img
                    src={
                      hotel.images && hotel.images.length > 0
                        ? hotel.images[0].small
                        : "/assets/img-placeholder.png"
                    }
                    alt={hotel.name}
                    className="info-window-image"
                  />
                  <h3>{hotel.name}</h3>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      }),
    [hotels, displayInfo, onHotelSelect, t],
  );

  return (
    <>
      <div className={`map-container ${isLargeMap ? 'large' : ''}`}>
        <div className="map-content">
          <GoogleMap
            mapContainerStyle={getContainerStyle({ fullHeight: !hotelLocation })}
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
