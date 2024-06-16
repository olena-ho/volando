import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Dropdown } from "../Dropdown";
import { CountriesInput } from "../CountriesInput";
import { filterHotels } from "../../utils/filterHotels";
import { getFilters } from "../../utils/getFilters";
import "./style.css";
import hotels from "../../api/hotels";
import outdoorsImg from "../LargeDropdownContent/img/cycling.png";
import sportImg from "../LargeDropdownContent/img/sports.png";
import kidsImg from "../LargeDropdownContent/img/playground.png";
import artImg from "../LargeDropdownContent/img/hobby.png";
import relaxImg from "../LargeDropdownContent/img/beach.png";
import indoorsImg from "../LargeDropdownContent/img/pool.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState(getFilters(searchParams));
  
  useEffect(() => {
    //a variable to store the filters that are not empty
    const activeFilters = Object.entries(filters).reduce(
      (acc, [key, value]) => {
        if (value.length > 0) acc[key] = value;
        return acc;
      },
      {}
    );

    const urlParam = new URLSearchParams(activeFilters).toString();
    setSearchParams(urlParam);
  }, [filters]);

  const handleFilterChange = (category, newCheckedOptions) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: newCheckedOptions,
    }));
  };

  const handleLocationChange = (locCode) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      locCode: locCode,
    }));
  };

  const handleSearch = () => {
    const { filteredHotels, alternativeHotels } = filterHotels(hotels, filters);
    //the user has to select at least one activity
    if (filters.activities.length === 0) {
      toast.error(t("alert-param"), {
        className: 'custom-toast',
        progressClassName: 'custom-toast-progress-bar'
      });
      return;
    }

    onSearch();
  };
  
  return (
    <div className="search-bar-wrapper">
      <ToastContainer 
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
      <Dropdown
        title={t("activitiesP")}
        options={[
          {
            key: "outdoors",
            value: t("outdoors"),
            image: outdoorsImg,
            subcategories: [
              { key: "hiking", value: t("hiking") },
              { key: "cycling", value: t("cycling") },
              { key: "fishing", value: t("fishing") },
              { key: "surfing", value: t("surfing") },
              { key: "safari", value: t("safari") },
              { key: "beach-volleyball", value: t("beach-volleyball") },
              { key: "hotair-ballooning", value: t("hotair-ballooning") },
            ],
          },
          {
            key: "sport",
            value: t("sport"),
            image: sportImg,
            subcategories: [
              { key: "tennis", value: t("tennis") },
              { key: "golf", value: t("golf") },
              { key: "skiing-snowboarding", value: t("skiing-snowboarding") },
              { key: "horse-riding", value: t("horse-riding") },
              { key: "water-sports", value: t("water-sports") },
              { key: "rock-climbing", value: t("rock-climbing") },
            ],
          },
          {
            key: "art",
            value: t("art"),
            image: artImg,
            subcategories: [
              { key: "crafts", value: t("crafts") },
              { key: "painting", value: t("painting") },
              { key: "cooking-masterclass", value: t("cooking-masterclass") },
              { key: "wine-tasting", value: t("wine-tasting") },
              { key: "gall-mus-opera", value: t("gall-mus-opera") },
              { key: "dancing", value: t("dancing") },
            ],
          },
          {
            key: "relax",
            value: t("relax"),
            image: relaxImg,
            subcategories: [
              { key: "spa", value: t("spa") },
              { key: "massage", value: t("massage") },
              { key: "yoga", value: t("yoga") },
            ],
          },
          {
            key: "indoors",
            value: t("indoors"),
            image: indoorsImg,
            subcategories: [
              { key: "bowling", value: t("bowling") },
              { key: "billiard", value: t("billiard") },
              { key: "boardgames", value: t("boardgames") },
              { key: "casino", value: t("casino") },
            ],
          },
          {
            key: "kids",
            value: t("kids"),
            image: kidsImg,
            subcategories: [
              { key: "playground", value: t("playground") },
              { key: "kids-club", value: t("kids-club") },
              { key: "aquapark", value: t("aquapark") },
              { key: "minigolf", value: t("minigolf") },
            ],
          },
        ]}
        selectedOptions={filters.activities}
        onChange={(newCheckedOptions) =>
          handleFilterChange("activities", newCheckedOptions)
        }
        large={true}
        filtersApplied={filters.activities}
      />
      <CountriesInput
        placeholder={t("locationP")}
        selectedOptions={filters.locCode}
        onChange={handleLocationChange}
      />
      <Dropdown
        title={t("comfortP")}
        options={[
          { key: "wifi", value: t("wifi") },
          { key: "parking", value: t("parking") },
          { key: "pets", value: t("pets") },
          { key: "pool", value: t("pool") },
          { key: "beach", value: t("beach") },
          { key: "gym", value: t("gym") },
          { key: "kitchen", value: t("kitchen") },
          { key: "restaurant", value: t("restaurant") },
        ]}
        selectedOptions={filters.comfort}
        onChange={(newCheckedOptions) =>
          handleFilterChange("comfort", newCheckedOptions)
        }
        filtersApplied={filters.comfort}
      />
      <Dropdown
        title={t("priceP")}
        options={[
          { key: "any-price", value: t("any-price") },
          { key: "budget", value: t("budget") },
          { key: "midrange", value: t("midrange") },
          { key: "luxury", value: t("luxury") },
        ]}
        selectedOptions={filters.price}
        onChange={(newCheckedOptions) =>
          handleFilterChange("price", newCheckedOptions)
        }
        filtersApplied={filters.price}
      />
      <Dropdown
        title={t("ratingP")}
        options={[
          { key: "any", value: t("any") },
          { key: "4.5", value: t("4.5") },
          { key: "4", value: t("4") },
          { key: "3", value: t("3") },
        ]}
        selectedOptions={filters.rating}
        onChange={(newCheckedOptions) =>
          handleFilterChange("rating", newCheckedOptions)
        }
        filtersApplied={filters.rating}
      />

      <button className="btn search-button" onClick={handleSearch}>
        {t("searchB")}
      </button>
    </div>
  );
};
