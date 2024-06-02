import hotels from "../../api/hotels";
import { useTranslation } from "react-i18next";
import './style.css';

export const Card = () => {
  const [tttt] = useTranslation(["details"]);
  const foundHotels = [hotels];

  return (
    <section className="">
      <div className="container-card">  
        {hotels.map((hotel, index) => {
          const activities = typeof hotel.activities === 'string'
            ? hotel.activities.split(',') // Якщо activities є рядком, розділити його на масив
            : hotel.activities; // Якщо activities вже масив, використати його без змін

          return (
            <div key={index} className="hotel-card">
              <img src={hotel.images[0]} alt={hotel.name} />
              <div className="hotel-info">
                <h2>{hotel.name}</h2>
                <div className="activities-container">
                  <span>Activities: </span>
                  <p className="activities-list">
                    {activities.join(', ')}
                  </p>
                </div>
                <div className="details-container">
                  <p className="hotel-address">Address: {hotel.address}</p>
                  <p className="hotel-rating">Rating: {hotel.rating}</p>
                </div>
              </div>
            </div>
          );
        })}
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
