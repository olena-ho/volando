import React, { useState } from "react";
import { HomeVisual } from "../../components/HomeVisual";
import { SearchBar } from "../../components/SearchBar";
import "./style.css";
import { SearchResults } from "../../components/SearchResults";

export const HomePage = () => {
  const [foundHotelsIds, setFoundHotelsIds] = useState([]);
  console.log(foundHotelsIds);
  return (
    <div className="main-page__container">
    
      <SearchBar onSearch={setFoundHotelsIds} />
      {foundHotelsIds.length > 0 ?  
      <SearchResults foundHotelsIds={foundHotelsIds} /> : <HomeVisual />}
    </div>
  );
};
