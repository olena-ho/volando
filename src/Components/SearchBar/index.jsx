import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "../Dropdown";
import "./style.css";
import { CountriesInput } from "../CountriesInput";
import hotels from "../../api/hotels";

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
    const filteredHotels = hotels
      .filter((hotel) => {
        const matchesActivities = filters.activities.every((activity) =>
          hotel.activities.includes(activity)
        );
        const matchesComfort = filters.comfort.every((comfort) =>
          hotel.comfort.includes(comfort)
        );
        const matchesPrice = filters.price.includes(hotel.price);
        const matchesRating = filters.rating.some(
          (rating) => hotel.rating >= parseFloat(rating)
        );
        const matchesLocation = filters.locCode.includes(hotel["loc-code"]);

        return (
          matchesActivities &&
          matchesComfort &&
          matchesPrice &&
          matchesRating &&
          matchesLocation
        );
      })
      .map((hotel) => hotel.name);

    console.log(filteredHotels);
    onSearch(filteredHotels);
  };

  return (
    <div className="search-bar-wrapper">
      <Dropdown
        title={t("activitiesP")}
        options={[
          { key: "outdoors", value: t("outdoors") },
          { key: "sport", value: t("sport") },
          { key: "art", value: t("art") },
          { key: "relax", value: t("relax") },
          { key: "kids", value: t("kids") },
        ]}
        onChange={(newCheckedOptions) =>
          handleFilterChange("activities", newCheckedOptions)
        }
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
          { key: "4.5", value: t("4.5") },
          { key: "4", value: t("4") },
          { key: "3", value: t("3") },
          { key: "any", value: t("any") },
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