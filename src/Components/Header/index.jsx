import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import cs from "./img/cs-lang.png";
import uk from "./img/uk-lang.png";
import en from "./img/en-lang.png";
import logo from "./img/logo.svg";
import favorites from "./img/heart.svg";
import info from "./img/info-2.png";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("cs");
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getCurrentFlag = () => {
    switch (currentLang) {
      case "cs":
        return cs;
      case "uk":
        return uk;
      case "en":
        return en;
      default:
        return cs;
    }
  };

  return (
    <div className="header">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <div className="header__right">
        <div className="language-selector" onClick={toggleDropdown}>
          <img src={getCurrentFlag()} alt={currentLang} className="flag-icon" />
          {dropdownOpen && (
            <div className="dropdown">
              {currentLang !== "cs" && (
                <img
                  src={cs}
                  alt="Czech"
                  className="dropdown-flag"
                  onClick={() => changeLanguage("cs")}
                />
              )}
              {currentLang !== "en" && (
                <img
                  src={en}
                  alt="English"
                  className="dropdown-flag"
                  onClick={() => changeLanguage("en")}
                />
              )}
              {currentLang !== "uk" && (
                <img
                  src={uk}
                  alt="Ukrainian"
                  className="dropdown-flag"
                  onClick={() => changeLanguage("uk")}
                />
              )}
            </div>
          )}
        </div>
        <img
          src={favorites}
          alt="favorites"
          onClick={() => navigate("/favorites")}
          className="header__icon"
        />
        <img
          src={info}
          alt="info"
          onClick={() => navigate("/team-info")}
          className="header__icon" />
      </div>
    </div>
  );
};
