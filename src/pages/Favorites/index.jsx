import "./style.css";
import hotels from "../../api/hotels.js";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import { HotelList } from "../../Components/HotelList/index.jsx";

export const Favorites = () => {
  const { t } = useTranslation();
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [filteredHotels, setFilteredHotels] = useState(
    hotels.filter(({ id }) => storedFavorites.includes(id))
  );

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFilteredHotels(hotels.filter(({ id }) => storedFavorites.includes(id)));
  }, []);

  const onRemoveFromFavorites = (id) => {
    const updatedFavorites = storedFavorites.filter((favId) => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFilteredHotels(hotels.filter(({ id }) => updatedFavorites.includes(id)));
  };

  console.log("filteredHotels", filteredHotels);
  return (
    <div className="favorites-container">
      <h1 className="title">{t("favoritesM")}</h1>
      <HotelList
        hotels={filteredHotels}
        onRemoveFromFavorites={onRemoveFromFavorites}
      />
    </div>
  );
};
