import snowboarder from "./img/snowboarder.jpg";
import geolocation from "./img/geolocation.png";
import traveler from "./img/traveler.png";
import "./style.css";

export const HomeVisual = () => { 
  return (
    <div className="main-page__visual">
      <img src={snowboarder} alt="snowboarder" className="main-page__image" />  
      <img src={geolocation} alt="pick your location" className="main-page__image main-page__image--s" />  
      <img src={traveler} alt="go on vacation" className="main-page__image" />  
    </div>
  );
}
