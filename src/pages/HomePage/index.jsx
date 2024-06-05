import { HomeVisual } from "../../components/HomeVisual";
import { SearchBar } from "../../components/SearchBar";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const HomePage = () => {
  const [filteredHotels, setFilteredHotels] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (results) => {
    setFilteredHotels(results);
    navigate('/search-results', { state: { filteredHotels: results } });
  };

  return (
    <div className="main-page__container">
      <SearchBar onSearch={handleSearch} />
      <HomeVisual />
    </div>
  );
};
