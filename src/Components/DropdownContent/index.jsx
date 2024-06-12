export const DropdownContent = ({
  options,
  checkedOptions,
  onCheckboxChange,
  show,
}) => {
  return (
    <div className={`dropdown-content ${show ? "show" : ""}`}>
      {options.map((option) => (
        <label className="checkbox-label" key={option.key}>
          <input
            type="checkbox"
            name={option.key}
            checked={checkedOptions.includes(option.key)}
            onChange={onCheckboxChange}
          />
          {option.value}
        </label>
      ))}
    </div>
  );
};
