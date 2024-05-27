import { SearchBar } from "../../components/SearchBar";
import Map from "../../components/Map";
import "./style.css";

export const HomePage = () => {
  return (
    <>
      <SearchBar />
      <div className="search-results-container">
        <div>FiltersApplied</div>
        <div></div>
        <div className="map-container">
          <Map />
        </div>
      </div>
      <p>Images</p>
    </>
  );
};
