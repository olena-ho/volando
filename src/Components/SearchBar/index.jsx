import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "../Dropdown";
import "./style.css";
import { CountriesInput } from "../CountriesInput";

export const SearchBar = ({ onSearch }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [filters, setFilters] = useState({
    activities: [],
    locCode: [],
    comfort: [],
    price: [],
    rating: [],
  });

  const handleFilterChange = (category, option, checked) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (checked) {
        newFilters[category] = [...newFilters[category], option];
      } else {
        newFilters[category] = newFilters[category].filter(
          (item) => item !== option
        );
      }
      return newFilters;
    });
  };

  const handleLocationChange = (locCode) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      locCode: locCode,
    }));
  };

  const handleLocationSubmit = () => {
    // add additional logic for when the location is submitted
    console.log("Location submitted:", filters.locCode);
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="search-bar-wrapper">
      <Dropdown
        title={t("activitiesP")}
        options={[t("outdoors"), t("sport"), t("art"), t("relax"), t("kids")]}
        onChange={(option, checked) =>
          handleFilterChange("activities", option, checked)
        }
      />
      <CountriesInput
        placeholder={t("locationP")}
        onChange={handleLocationChange}
        onSubmit={handleLocationSubmit}
      />
      <Dropdown
        title={t("comfortP")}
        options={["Wifi", "Pool", "Gym"]}
        onChange={(option, checked) =>
          handleFilterChange("comfort", option, checked)
        }
      />
      <Dropdown
        title={t("priceP")}
        options={["$ - Budget", "$$ - Midrange", "$$$ - Luxury"]}
        onChange={(option, checked) =>
          handleFilterChange("price", option, checked)
        }
      />
      <Dropdown
        title={t("ratingP")}
        options={["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"]}
        onChange={(option, checked) =>
          handleFilterChange("rating", option, checked)
        }
      />
      <a href="/search-results">
      <button className="search-button" onClick={handleSearch}>
        {t("searchB")}
        </button>
        </a>
    </div>
  );
};
