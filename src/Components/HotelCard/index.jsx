import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HotelDetails } from "../HotelDetails/index.jsx";
import Map from "../Map/index.jsx";
import "./style.css";
import heartOff from "../../../public/heart-grey.png";
import heartOn from "../../../public/heart-orange.png";

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
  const { t } = useTranslation(["details", "translation"]);
  const { activities = [] } = hotelDetails;
  const [showMap, setShowMap] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMap = (e) => {
    e.stopPropagation();
    setShowMap(!showMap);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    if (isFavorite(hotel.id)) {
      onRemoveFromFavorites(hotel.id);
    } else {
      onAddToFavorites(hotel.id);
    }
  };

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
          <div className="hotel-info__first-line">
            <h2>{hotel.name}</h2>
            <button
              className="add-heart icon"
              onClick={handleHeartClick}
            >
              <img
                src={isFavorite(hotel.id) ? heartOn : heartOff}
                alt="heart icon"
                className="heart-icon"
              />
            </button>
          </div>
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

        <button
          className={`arrow-details icon ${
            isHotelDetailsOpened ? "active" : "inactive"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleOpenHotelDetails(hotel.id);
            handleShowMap(e);
          }}
        ></button>
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
          {isMobile && showMap && (
            <div className="mobile-map-container">
              <Map
                hotels={[hotel]}
                selectedHotel={hotel}
                onHotelSelect={() => {}}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
