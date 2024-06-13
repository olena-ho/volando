import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { HomeVisual } from "../../components/HomeVisual";
import { SearchBar } from "../../components/SearchBar";
import { SearchResults } from "../../components/SearchResults";
import hotels from "../../api/hotels";
import { filterHotels } from "../../utils/filterHotels";
import Lottie from "lottie-react";
import animation from "../../../public/assets/animation/searching-animation.json";
import "./style.css";

export const HomePage = () => {
  const [foundHotelsIds, setFoundHotelsIds] = useState([]);
  const [alternativeHotelsFound, setAlternativeHotelsFound] = useState(false);
  const [searchParams] = useSearchParams();
  const [showAnimation, setShowAnimation] = useState(false);

  const handleSearch = () => {
    const filters = {
      activities: searchParams.get("activities")
        ? searchParams.get("activities").split(",")
        : [],
      locCode: searchParams.get("locCode")
        ? searchParams.get("locCode").split(",")
        : [],
      comfort: searchParams.get("comfort")
        ? searchParams.get("comfort").split(",")
        : [],
      price: searchParams.get("price")
        ? searchParams.get("price").split(",")
        : [],
      rating: searchParams.get("rating")
        ? searchParams.get("rating").split(",")
        : [],
    };
    const hasNoFilters = Object.values(filters).every(
      (filter) => filter.length === 0
    );

    if (hasNoFilters) {
      setFoundHotelsIds([]);
      setAlternativeHotelsFound(false);
      return;
    }

    const { filteredHotels, alternativeHotels } = filterHotels(hotels, filters);

    setAlternativeHotelsFound(filteredHotels.length === 0);

    setFoundHotelsIds(
      (filteredHotels.length > 0 ? filteredHotels : alternativeHotels).map(
        (hotel) => hotel.id
      )
    );
  };
  // enabling sharing a link with search parameters with someone else and letting them see the results right away
  useEffect(() => {
    handleSearch();
  }, []);
  
  useEffect(() => {
    if (alternativeHotelsFound) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alternativeHotelsFound]);

  const isSearchResults = foundHotelsIds.length > 0;
  return (
    <div
      className={`main-page__container ${
        isSearchResults || window.innerWidth < 431 ? "padding-top-0" : "padding-top-100"
      }`}
    >
      <SearchBar
        onSearch={handleSearch}
        setAlternativeHotelsFound={setAlternativeHotelsFound}
      />
      {showAnimation ? (
        <div className="animation-container">
          <Lottie animationData={animation} className="animation" />
        </div>
      ) : isSearchResults ? (
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
