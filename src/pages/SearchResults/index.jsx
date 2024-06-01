import React from "react";
import { useTranslation } from "react-i18next";
import { SearchBar } from "../../components/SearchBar";
import Map from "../../components/Map";
import "./style.css";
import { Card } from "../../components/Card";

export const SearchResults = () => {
   
  
  return (
    <>
      <SearchBar />
      <div className="search-results-container">
        <div className="filters-applied">Filters Applied</div>
       <Card/>
        <div className="map-container">
          <Map />
        </div>
      </div>
    </>
  );
};
