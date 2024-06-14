import { useTranslation } from "react-i18next";
import { HotelDetails } from "../HotelDetails/index.jsx";
import "./style.css";

export const HotelCard = ({
  hotel,
  hotelDetails = {}, //to remove later: I added ={} to the props to avoid the error of undefined: *from Olena: I tried removing it and it works, so we can remove it I think
  onRemoveFromFavorites,
  onHotelClick,
  isFavorite,
  onAddToFavorites,
  handleOpenHotelDetails,
  isHotelDetailsOpened,
}) => {
  const { t } = useTranslation(["details", "translation"]);

  const { activities = [] } = hotelDetails; //due to this destructuring I use address and rating instead of hotelDetails.address and hotelDetails.rating

  return (
    <div className="hotel-card" onClick={() => onHotelClick(hotel)}>
      <div className="hotel-info--wrapper">
        <div className="hotel-card__image-wrapper">
          <img
            src={
              hotel.images && hotel.images.length > 0
                ? hotel.images[0].small
                : "/assets/img-placeholder.png"
            }
            alt={hotel.name}
            className="hotel-card__small-image"
          />
        </div>

        <div className="hotel-info">
          <h2>{hotel.name}</h2>
          <div className="activities-container">
            <div className="details-list">
              <div>
                <p>
                  {t("translation:activities")}: {activities.join(", ")}
                </p>
              </div>
            </div>
          </div>
          <div className="details-container">
            <p className="hotel-address">
              {t("translation:address")}: {hotel.address}
            </p>
            <p className="hotel-rating">
              {t("translation:ratingP")}: {hotel.rating}
            </p>
          </div>
        </div>
        <div className="favorite-container">
          <button
            className={`add-heart icon ${
              isFavorite(hotel.id) ? "active" : "inactive"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (isFavorite(hotel.id)) {
                onRemoveFromFavorites(hotel.id);
              } else {
                onAddToFavorites(hotel.id);
              }
            }}
          ></button>
          <button
            className={`arrow-details icon ${
              isHotelDetailsOpened ? "active" : "inactive"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleOpenHotelDetails(hotel.id);
            }}
          ></button>
        </div>
      </div>
      {isHotelDetailsOpened && (
        <div className="additional-container">
          <HotelDetails
            hotelDetails={hotelDetails}
            images={hotel.images}
            web={hotel.web}
            defaultReviews={hotel.defaultReviews}
            hotelId={hotel.id}
          />
        </div>
      )}
    </div>
  );
};
