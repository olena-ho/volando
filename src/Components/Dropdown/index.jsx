import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

export const Dropdown = ({ title, options, onChange }) => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShow(!show);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedOptions((prev) => {
      const newCheckedOptions = checked
        ? [...prev, name]
        : prev.filter((option) => option !== name);
      setTimeout(() => onChange(newCheckedOptions), 0);
      return newCheckedOptions;
    });
  };

  const handleApply = () => {
    setShow(false);
    console.log(checkedOptions);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {title} &#9662;
      </button>
      <div className={`dropdown-content ${show ? "show" : ""}`}>
        {options.map((option) => (
          <label className="checkbox-label" key={option.key}>
            <input
              type="checkbox"
              name={option.key}
              checked={checkedOptions.includes(option.key)}
              onChange={handleCheckboxChange}
            />
            {option.value}
          </label>
        ))}
        <button className="apply-button" onClick={handleApply}>
          {t("applyB")}
        </button>
      </div>
    </div>
  );
};
