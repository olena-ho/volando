import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import icon from "./img/down-icon.png";
import { DropdownContent } from "../DropdownContent";
import { LargeDropdownContent } from "../LargeDropdownContent";

export const Dropdown = ({ title, options, onChange, large }) => {
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
    <div className="dropdown-wrapper" ref={dropdownRef} onClick={toggleDropdown}>
      <button className="dropdown-button">
        {title} <img src={icon} alt="down-icon" className="down-icon" />
      </button>
      {large ? (
        <LargeDropdownContent
          categories={options}
          checkedOptions={checkedOptions}
          onCheckboxChange={handleCheckboxChange}
          show={show}
        />
      ) : (
        <DropdownContent
          options={options}
          checkedOptions={checkedOptions}
          onCheckboxChange={handleCheckboxChange}
          show={show}
        />
      )}
    </div>
  );
};
