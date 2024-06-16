import "./style.css";

export const LargeDropdownContent = ({
  categories,
  checkedOptions,
  onCheckboxChange,
  show,
}) => (
    <div className={`${show ? "show" : ""} dropdown-content--large`}>
      {categories.map((category) => (
        <div className="category-section" key={category.key}>
          <div className="category-header">
            <img
              src={category.image}
              alt={category.value}
              className="category-image"
            />
            <h3 className="category-title">{category.value}</h3>
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
