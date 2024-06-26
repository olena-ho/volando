import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../Dropdown/style.css";

export const CountriesInput = ({ placeholder, onChange }) => {
  const { i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [locCode, setLocCode] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [userInputValue, setUserInputValue] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [countries, setCountries] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const autocompleteListRef = useRef(null);

  useEffect(() => {
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

    const translatedCountries = Object.keys(countryTranslations).map((key) => ({
      key,
      name: countryTranslations[key],
    }));
    setCountries(translatedCountries);
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

  //enabling autocomplete when a user types smth into the input regardless of the letter case
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredCountries.length - 1 ? prevIndex + 1 : prevIndex
      );
      if (autocompleteListRef.current) {
        const nextIndex = highlightedIndex + 1;
        const nextItem = autocompleteListRef.current.children[nextIndex];
        if (nextItem) {
          nextItem.scrollIntoView({ block: "nearest" });
        }
      }
    } else if (event.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
      if (autocompleteListRef.current) {
        const prevIndex = highlightedIndex - 1;
        const prevItem = autocompleteListRef.current.children[prevIndex];
        if (prevItem) {
          prevItem.scrollIntoView({ block: "nearest" });
        }
      }
    } else if (event.key === "Enter" && highlightedIndex >= 0) {
      handleSelect(filteredCountries[highlightedIndex]);
    }
  };

  //the code for the animated line, see later if I can refactor it
  const handleFocus = (event) => {
    const inputElement = event.target;
    const afterElement = inputElement.nextElementSibling;
    if (afterElement) {
      afterElement.style.width = "100%";
    }
  };

  const handleBlur = (event) => {
    const inputElement = event.target;
    const afterElement = inputElement.nextElementSibling;
    if (afterElement) {
      afterElement.style.width = "0";
    }
  };

  const handleTyping = (event) => {
    const inputElement = event.target;
    const afterElement = inputElement.nextElementSibling;
    if (event.target.value.length > 0 && afterElement) {
      afterElement.style.width = "0";
    }
  };

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <input
        type="text"
        id="location"
        value={inputValue}
        placeholder={placeholder}
        onFocus={(event) => {
          setInputValue("");
          setShow(locCode.length > 0);
          handleFocus(event);
        }}
        onBlur={handleBlur}
        onChange={(event) => {
          handleInputChange(event);
          handleTyping(event);
        }}
        onKeyDown={handleKeyDown}
        className="dropdown-button text-input"
        autoComplete="off"
      />
      <div className="input-line"></div>
      {showAutocomplete && inputValue && (
        <div className="autocomplete-list" ref={autocompleteListRef}>
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
