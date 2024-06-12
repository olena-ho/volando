import snowboarder from "./img/snowboarder.jpg";
import geolocation from "./img/geolocation-s.png";
import traveler from "./img/traveler.png";
import { useTranslation } from "react-i18next";
import "./style.css";

export const HomeVisual = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="main-page__visual">
      <div className="visual-images">
        <img src={snowboarder} alt="snowboarder" className="main-page__image" />
        <img
          src={geolocation}
          alt="pick your location"
          className="main-page__image main-page__image--s"
        />
        <img src={traveler} alt="go on vacation" className="main-page__image" />
      </div>

      <div className="visual-text">
        <p className="visual-text__item">{t("home-text1")}</p>
        <p className="visual-text__item">{t("home-text2")}</p>
        <p className="visual-text__item">{t("home-text3")}</p>
      </div>
    </div>
  );
};
