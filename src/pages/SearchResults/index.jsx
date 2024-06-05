import React from "react";
import { useLocation } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";
import Map from "../../components/Map";
import "./style.css";
import { Card } from "../../components/Card";

export const SearchResults = () => {
  const location = useLocation();
  const { filteredHotels } = location.state || { filteredHotels: [] };

  return (
    <>
      <SearchBar />
      <div className="search-results-container">
        <div className="filters-applied">Filters Applied</div>
        <Card hotels={filteredHotels} />
        <div className="map-container">
          <Map />
        </div>
      </div>
    </>
  );
};
