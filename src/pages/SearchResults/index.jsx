import React from "react";
import { useLocation } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";
import Map from "../../components/Map";
import "./style.css";
import { Card } from "../../components/Card";
import hotels from "../../api/hotels";

export const SearchResults = () => {
  const location = useLocation();
  const { filteredHotels } = location.state || { filteredHotels: [] };

  return (
    <>
      <SearchBar />
      <div className="search-results-container">
        <div className="filters-applied">Filters Applied</div>
         <Card hotels={filteredHotels}  hotels={filteredHotels} />
        <div className="map-container">
          <Map hotels={filteredHotels} />
        </div>
      </div>
    </>
  );
};
