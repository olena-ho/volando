import "./style.css";

export const LargeDropdownContent = ({
  categories,
  checkedOptions,
  onCheckboxChange,
  show,
}) => {
  return (
    <div
      className={`dropdown-content ${
        show ? "show" : ""
      } dropdown-content--large`}
    >
      {categories.map((category) => (
        <div className="category-section" key={category.key}>
          <div className="category-header">
            <img
              src={category.image}
              alt={category.value}
              className="category-image"
            />
            <div className="category-title">{category.value}</div>
          </div>
          <div className="subcategory-list">
            {category.subcategories.map((subcategory) => (
              <label
                className="checkbox-label subcategory"
                key={subcategory.key}
              >
                <input
                  type="checkbox"
                  name={subcategory.key}
                  checked={checkedOptions.includes(subcategory.key)}
                  onChange={onCheckboxChange}
                />
                {subcategory.value}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};