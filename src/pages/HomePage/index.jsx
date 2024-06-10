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

  const handleSearch = (filters) => {
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

  useEffect(() => {
    const initialFilters = {
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

    if (
      initialFilters.activities.length > 0 ||
      initialFilters.locCode.length > 0 ||
      initialFilters.comfort.length > 0 ||
      initialFilters.price.length > 0 ||
      initialFilters.rating.length > 0
    ) {
      handleSearch(initialFilters);
    } else {
      setFoundHotelsIds([]);
      setAlternativeHotelsFound(false);
    }
  }, [searchParams]);

  useEffect(() => {
    if (alternativeHotelsFound) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alternativeHotelsFound]);

  return (
    <div className="main-page__container">
      <SearchBar
        onSearch={handleSearch}
        setAlternativeHotelsFound={setAlternativeHotelsFound}
      />
      {showAnimation ? (
        <div className="animation-container">
          <Lottie animationData={animation} className="animation" />
        </div>
      ) : foundHotelsIds.length > 0 ? (
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
