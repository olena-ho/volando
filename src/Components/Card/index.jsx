import hotels from "../../api/hotels";
import { useTranslation } from "react-i18next";

export const Card = () => {
  const [tttt] = useTranslation(["details"]);
  const foundHotels = [hotels[0]];

  return (
    <section className="">
      <div className="container">  
      {hotels.map((hotel, index) => ( 
        <div key={index}>
          <img src={hotel.images[0]} alt={hotel.name} />
          <h2>{hotel.name}</h2>
        <div/>
          <ul>
            <li>{hotel.activities}</li>
            <li>{hotel.address}</li>
            <li>{hotel.rating}</li>
          </ul>
        </div>))}
      </div>

      <div className="search-cards">
      {foundHotels.map((hotel, index) => {
        return (
          <div key={index}>
            <p>{hotel.name}</p>
            <p>{tttt(`${hotel.name}.description`)}</p>
          </div>
        );
      })}
    </div>
    </section>
  );
};

