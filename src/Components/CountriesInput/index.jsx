import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../Dropdown/style.css";

export const CountriesInput = ({ placeholder, onChange }) => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [locCode, setLocCode] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [userInputValue, setUserInputValue] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [countries, setCountries] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const loadCountries = () => {
      const countryTranslations = i18n.getResourceBundle(
        i18n.language,
        "countries"
      );

      if (!countryTranslations) {
        console.error(
          `No country translations found for language: ${i18n.language}`
        );
        return;
      }

      const translatedCountries = Object.keys(countryTranslations).map(
        (key) => ({
          key,
          name: countryTranslations[key],
        })
      );
      setCountries(translatedCountries);
    };

    loadCountries();
  }, [i18n.language, i18n]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowAutocomplete(true);
    setShow(false);
    setHighlightedIndex(-1); 
  };

  const handleSelect = (country) => {
    setLocCode((prevLocCode) => [...prevLocCode, country.key]);
    setUserInputValue((prevValues) => [...prevValues, country.name]);
    setInputValue("");
    setShow(true);
    setShowAutocomplete(false);
    setHighlightedIndex(-1); 
    onChange([...locCode, country.key]);
  };

  const handleRemove = (index) => {
    const newLocCode = locCode.filter((_, i) => i !== index);
    const newUserInputValue = userInputValue.filter((_, i) => i !== index);
    setLocCode(newLocCode);
    setUserInputValue(newUserInputValue);
    onChange(newLocCode);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShow(false);
      setShowAutocomplete(false);
      setInputValue(userInputValue.join(", "));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userInputValue]);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredCountries.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === "Enter" && highlightedIndex >= 0) {
      handleSelect(filteredCountries[highlightedIndex]);
    }
  };

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <input
        type="text"
        id="location"
        value={inputValue}
        placeholder={placeholder}
        onFocus={() => {
          setInputValue("");
          setShow(locCode.length > 0);
        }}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} 
        className="dropdown-button"
        autoComplete="off"
      />
      {showAutocomplete && inputValue && (
        <div className="autocomplete-list">
          {filteredCountries.map((country, index) => (
            <div
              key={index}
              className={`autocomplete-item ${
                highlightedIndex === index ? "highlighted" : ""
              }`}
              onClick={() => handleSelect(country)}
            >
              {country.name}
            </div>
          ))}
        </div>
      )}
      <div className={`dropdown-content ${show ? "show" : ""}`}>
        <div className="location-box">
          {userInputValue.map((loc, index) => (
            <div key={index} className="added-location-wrapper">
              <button className="added-location">
                {loc}
                <span
                  className="remove-location"
                  onClick={() => handleRemove(index)}
                >
                  ✖
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
