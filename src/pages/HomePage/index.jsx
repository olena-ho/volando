import React, { useState } from "react";
import { HomeVisual } from "../../components/HomeVisual";
import { SearchBar } from "../../components/SearchBar";
import "./style.css";
import { SearchResults } from "../../components/SearchResults";

export const HomePage = () => {
  const [foundHotelsIds, setFoundHotelsIds] = useState([]);
  const [alternativeHotelsFound, setAlternativeHotelsFound] = useState(false);

  console.log(foundHotelsIds);
  return (
    <div className="main-page__container">
      <SearchBar
        onSearch={setFoundHotelsIds}
        setAlternativeHotelsFound={setAlternativeHotelsFound}
      />
      {foundHotelsIds.length > 0 ? (
        <SearchResults
          foundHotelsIds={foundHotelsIds}
          alternativeHotelsFound={alternativeHotelsFound}
        />
      ) : (
        <HomeVisual />
      )}
    </div>
  );
};
