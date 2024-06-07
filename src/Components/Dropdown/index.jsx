import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import icon from "./img/down-icon.png"

export const Dropdown = ({ title, options, onChange }) => {
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
        {title} <img src={icon} alt="down-icon" className="down-icon"/> 
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
      </div>
    </div>
  );
};
