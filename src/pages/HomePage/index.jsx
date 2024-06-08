import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeVisual } from "../../components/HomeVisual";
import { SearchBar } from "../../components/SearchBar";
import "./style.css";

export const HomePage = () => {
  // const navigate = useNavigate();

  // const handleSearchHP = (filteredHotels) => {
  //   navigate("/search-results", { state: { filteredHotels } });
  // };

  return (
    <div className="main-page__container">
      <SearchBar />
      <HomeVisual />
    </div>
  );
};
