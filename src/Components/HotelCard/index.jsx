import { useTranslation } from "react-i18next";
import { HotelDetails } from "../HotelDetails/index.jsx";
import "./style.css";

export const HotelCard = ({
  hotel,
  hotelDetails,
  onRemoveFromFavorites,
  onHotelClick,
  isFavorite,
  onAddToFavorites,
  handleOpenHotelDetails,
  isHotelDetailsOpened,
}) => {
  const { t } = useTranslation(["details", "translation"]); // Hook for translations
  return (
    <div className="hotel-card" onClick={() => onHotelClick(hotel)}>
      <div className="hotel-info--wrapper">
        <img
          src={
            hotel.images && hotel.images.length > 0
              ? hotel.images[0].small
              : "/assets/img-placeholder.png"
          }
          alt={hotel.name}
        />

        <div className="hotel-info">
          <h2>{hotel.name}</h2>
          <div className="activities-container">
            <div className="details-list">
              <div>
                <p>
                  {t("translation:activities")}:{" "}
                  {hotelDetails.activities ? hotelDetails.activities.join(", ") : t("translation:noActivities")}  {/* Check for hotelDetails definition */}
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
