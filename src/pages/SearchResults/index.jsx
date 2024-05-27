import Map from '../../components/Map';
import './style.css';

export const SearchResults = () => {
  return (
    <div className="search-results-container">
      <div>
    FiltersApplied
      </div>
      <div></div>
      <div className='map-container'>
        <Map />
      </div>
    </div>
  );
}