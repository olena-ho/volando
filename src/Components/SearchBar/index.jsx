import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Dropdown } from "../Dropdown";
import "./style.css";
import { CountriesInput } from "../CountriesInput";
import hotels from "../../api/hotels";
import { useSearchParams } from "react-router-dom";
import outdoorsImg from "../LargeDropdownContent/img/cycling.png";
import sportImg from "../LargeDropdownContent/img/sports.png";
import kidsImg from "../LargeDropdownContent/img/playground.png";
import artImg from "../LargeDropdownContent/img/hobby.png";
import relaxImg from "../LargeDropdownContent/img/beach.png";
import indoorsImg from "../LargeDropdownContent/img/pool.png";

const getFilterResult = (hotel, filters) => {
  const { activities, locCode, comfort, price, rating } = filters;

  const matchesActivities = activities.some((activity) =>
    hotel.activities.includes(activity)
  );

  const matchesLocation =
    locCode.length === 0 || locCode.includes(hotel["loc-code"]);

  const matchesComfort =
    comfort.length === 0 || comfort.every((c) => hotel.comfort.includes(c));

  const matchesPrice =
    price.length === 0 ||
    price.includes("any-price") ||
    price.includes(hotel.price);

  const matchesRating =
    rating.length === 0 ||
    rating.includes("any") ||
    rating.some((r) => hotel.rating >= parseFloat(r));

  return {
    matchesActivities,
    matchesLocation,
    matchesComfort,
    matchesPrice,
    matchesRating,
  };
};

export const SearchBar = ({ onSearch, setAlternativeHotelsFound }) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    // searchParams.get("activities").split(",") ||
    activities: [],
    locCode: [],
    comfort: [],
    price: [],
    rating: [],
  });
console.log(filters)
  useEffect(() => {
    //create a varieble to store the filters that are not empty

    const activeFilters = Object.entries(filters).reduce((acc, [key, value]) => { 
      if (value.length > 0) acc[key] = value;
      return acc;
    }, {});

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
    const { activities, locCode, comfort, price, rating } = filters;

    if (activities.length === 0) {
      alert(t("alert-param"));
      return;
    }

    const filteredHotels = hotels.filter((hotel) => {
      const filterResult = getFilterResult(hotel, filters);
      return Object.values(filterResult).every((value) => value === true);
    });

    const alternativeHotels = hotels.filter((hotel) => {
      const filterResult = getFilterResult(hotel, filters);
      // const newFilterResult = Object.entries(filterResult).reduce(
      //   (acc, [key, value]) => {
      //     if (value) acc[key] = value;
      //     return acc;
      //   },
      //   {}
      // );

      return filterResult.matchesActivities;
    });

    setAlternativeHotelsFound(filteredHotels.length === 0);

    console.log(`Perfect: ${filteredHotels}`);
    console.log(`Alternative: ${alternativeHotels}`);
    onSearch(
      (filteredHotels.length > 0 ? filteredHotels : alternativeHotels).map(
        (hotel) => hotel.id
      )
    );
  };

  const navigate = useNavigate();

  return (
    <div className="search-bar-wrapper">
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
              { key: "minigolf", value: t("minigolf") },
              { key: "beach-volleyball", value: t("beach-volleyball") },
            ],
          },
          {
            key: "sport",
            value: t("sport"),
            image: sportImg,
            subcategories: [
              { key: "tennis", value: t("tennis") },
              { key: "golf", value: t("golf") },
              { key: "skiing", value: t("skiing") },
              { key: "horse-riding", value: t("horse-riding") },
              { key: "water-sports", value: t("water-sports") },
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
              { key: "casino", value: t("casino") }
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
            ],
          },
        ]}
        onChange={(newCheckedOptions) =>
          handleFilterChange("activities", newCheckedOptions)
        }
        large={true}
      />
      <CountriesInput
        placeholder={t("locationP")}
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
        ]}
        onChange={(newCheckedOptions) =>
          handleFilterChange("comfort", newCheckedOptions)
        }
      />
      <Dropdown
        title={t("priceP")}
        options={[
          { key: "any-price", value: t("any-price") },
          { key: "budget", value: t("budget") },
          { key: "midrange", value: t("midrange") },
          { key: "luxury", value: t("luxury") },
        ]}
        onChange={(newCheckedOptions) =>
          handleFilterChange("price", newCheckedOptions)
        }
      />
      <Dropdown
        title={t("ratingP")}
        options={[
          { key: "any", value: t("any") },
          { key: "4.5", value: t("4.5") },
          { key: "4", value: t("4") },
          { key: "3", value: t("3") },
        ]}
        onChange={(newCheckedOptions) =>
          handleFilterChange("rating", newCheckedOptions)
        }
      />

      <button className="search-button" onClick={handleSearch}>
        {t("searchB")}
      </button>
    </div>
  );
};
