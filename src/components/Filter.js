import "./Filter.css";
import { useState } from "react";
import ReactSlider from "react-slider";
import { useEffect } from "react";



function Filter({ applyFilters }) {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [priceRange, setPriceRange] = useState(() => {
    const storedPriceRange = JSON.parse(localStorage.getItem("priceRange"));
    return storedPriceRange || { min: 0, max: 200 };
  });
  const [titleFilter, setTitleFilter] = useState(() => {
    return localStorage.getItem("titleFilter") || "";
  });
  const [selectedSizes, setSelectedSizes] = useState(() => {
    const storedSizes = JSON.parse(localStorage.getItem("selectedSizes"));
    return storedSizes || [];
  });
  const [selectedColors, setSelectedColors] = useState(() => {
    const storedColors = JSON.parse(localStorage.getItem("selectedColors"));
    return storedColors || [];
  });

  // Toggle Filter Section
  function toggleFilterVisibility() {
    setFilterVisible((prevVisibility) => !prevVisibility);
  }

  // Pricing Filter
  function handlePriceChange(values) {
    setPriceRange({ min: values[0], max: values[1] });
  }

  // Title Filter
  function handleTitleChange(e) {
    setTitleFilter(e.target.value);
  }

  // Size Filter
  function handleSizeChange(size) {
    const updatedSizes = [...selectedSizes];
    if (updatedSizes.includes(size)) {
      updatedSizes.splice(updatedSizes.indexOf(size), 1);
    } else {
      updatedSizes.push(size);
    }
    setSelectedSizes(updatedSizes);
  }

  // Color Filter
  function handleColorChange(color) {
    const updatedColors = [...selectedColors];
    if (updatedColors.includes(color)) {
      updatedColors.splice(updatedColors.indexOf(color), 1);
    } else {
      updatedColors.push(color);
    }
    setSelectedColors(updatedColors);
  }

  // Passing Whole Filter Section
  function applyFiltersHandler() {
    const filters = {
      title: titleFilter,
      price: priceRange,
      sizes: selectedSizes,
      colors: selectedColors,
    };
    applyFilters(filters);
    //closeFilterSection(); // Close the filter section after applying filters
  }

  function closeFilterSection() {
    setFilterVisible(false);
  }
  

  // Apply filters when selectedSizes or selectedColors change
  useEffect(() => {
    applyFiltersHandler();
    // Update localStorage with the current filter values
    localStorage.setItem("priceRange", JSON.stringify(priceRange));
    localStorage.setItem("titleFilter", titleFilter);
    localStorage.setItem("selectedSizes", JSON.stringify(selectedSizes));
    localStorage.setItem("selectedColors", JSON.stringify(selectedColors));
  }, [titleFilter, priceRange, selectedSizes, selectedColors]);


return (
    <div>
      <button className='ShowFilter' onClick={toggleFilterVisibility}>{isFilterVisible ? 'Hide Filters' : 'Show Filters'}</button>
      {isFilterVisible && (
        <div className="FilterSection">
        <div className="TitleFilter">
          <h3 className="FilterHeading">By Title</h3>
          <div className="HeadingBar"></div>
          <input placeholder="Search for the Product Title" value={titleFilter}
              onChange={handleTitleChange}
            />
            <button className="ApplyFiltersButton" onClick={closeFilterSection}>
            Apply Filters
          </button>
        </div>
        <div className="PriceFilter">
            <h3 className="FilterHeading">By Price</h3>
            <div className="HeadingBar"></div>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              min={0}
              max={200}
              defaultValue={[priceRange.min, priceRange.max]}
              onChange={handlePriceChange}
             />
            <p>Price: ${priceRange.min} - ${priceRange.max}</p>
          </div>

          <div className="SizeFilter">
            <h3 className="FilterHeading">By Size</h3>
            <div className="HeadingBar"></div>

            <div className="StyleRadio">
              <label className="RadioContainer">
                XS
                <input
                  type="checkbox"
                  checked={selectedSizes.includes("XS")}
                  onChange={() => handleSizeChange("XS")}
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="StyleRadio">
              <label className="RadioContainer">
                S
                <input
                  type="checkbox"
                  checked={selectedSizes.includes("S")}
                  onChange={() => handleSizeChange("S")}
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="StyleRadio">
              <label className="RadioContainer">
                M
                <input
                  type="checkbox"
                  checked={selectedSizes.includes("M")}
                  onChange={() => handleSizeChange("M")}
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="StyleRadio">
              <label className="RadioContainer">
                L
                <input
                  type="checkbox"
                  checked={selectedSizes.includes("L")}
                  onChange={() => handleSizeChange("L")}
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="StyleRadio">
              <label className="RadioContainer">
                XL
                <input
                  type="checkbox"
                  checked={selectedSizes.includes("XL")}
                  onChange={() => handleSizeChange("XL")}
                />
                <span className="checkmark"></span>
              </label>
            </div>

          </div>

          <div className="ColorFilter">
          <h3 className="FilterHeading">By Color</h3>
          <div className="HeadingBar"></div>

          <div className="ColorCheckbox">
            <div className="StyleCheckbox">
                <label className="CheckboxContainer CheckboxContainerBlack">
                  Black
                  <input
                    type="checkbox"
                    checked={selectedColors.includes("black")}
                    onChange={() => handleColorChange("black")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="StyleCheckbox">
                <label className="CheckboxContainer CheckboxContainerBlue">
                  Blue
                  <input
                    type="checkbox"
                    checked={selectedColors.includes("blue")}
                    onChange={() => handleColorChange("blue")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="StyleCheckbox">
                <label className="CheckboxContainer CheckboxContainerRed">
                  Red
                  <input
                    type="checkbox"
                    checked={selectedColors.includes("red")}
                    onChange={() => handleColorChange("red")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="StyleCheckbox">
                <label className="CheckboxContainer CheckboxContainerWhite">
                  White
                  <input
                    type="checkbox"
                    checked={selectedColors.includes("white")}
                    onChange={() => handleColorChange("white")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="StyleCheckbox">
                <label className="CheckboxContainer CheckboxContainerGreen">
                  Green
                  <input
                    type="checkbox"
                    checked={selectedColors.includes("green")}
                    onChange={() => handleColorChange("green")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
          </div>
            
        </div>



      </div>
      )}
    </div>
  );
}


export default Filter ;