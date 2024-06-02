import hotels from "../../api/hotels";
import { useTranslation } from "react-i18next";
import './style.css';

export const Card = () => {
  const [tttt] = useTranslation(["details"]);
  const foundHotels = hotels.slice(0, 3); // Вибираємо перші три готелі з масиву

  return (
    <section className="">
      <div className="container-card">  
        {foundHotels.map((hotel, index) => { // Змінили `hotels` на `foundHotels`
          const activities = typeof hotel.activities === 'string'
            ? hotel.activities.split(',') 
            : hotel.activities;

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
    </section>
  );
};
