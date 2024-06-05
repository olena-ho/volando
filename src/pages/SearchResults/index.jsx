import React, { useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import Map from "../../components/Map";
import "./style.css";
import { Card } from "../../components/Card";
import hotels from "../../api/hotels";

export const SearchResults = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels.slice(0, 3));

  return (
    <>
      <SearchBar />
      <div className="search-results-container">
        <div className="filters-applied">Filters Applied</div>
        <Card hotels={filteredHotels} />
        <div className="map-container">
          <Map hotels={filteredHotels} />
        </div>
      </div>
    </>
  );
};
