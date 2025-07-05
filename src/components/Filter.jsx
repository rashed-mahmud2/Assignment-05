import React from "react";
import { useFilter } from "../context/FilterContext";

export default function Filter() {
  const {
    search,
    setSearch,
    category,
    setCategory,
    brand,
    setBrand,
    prizeRange,
    setPrizeRange,
    handleBrandChange,
    handleCategoryChange,
    setOpenFilter,
    sortOrder,
    defaultOrder,
    lowToHigh,
    highToLow,
    categoryOnlyData,
    brandOnlyData,
  } = useFilter();

  const handleResetBtn = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setPrizeRange([0, 5000]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 rounded-md border-2 border-gray-200 outline-0 w-full md:w-auto"
      />

      {/* Sorting products */}
      <h2 className="mt-7 font-semibold text-xl mb-3">Sort By Price</h2>
      <div>
        <select
          value={sortOrder}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "default") defaultOrder();
            else if (value === "lowToHigh") lowToHigh();
            else if (value === "highToLow") highToLow();
          }}
          className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
        >
          <option value="default">Default Order</option>
          <option value="lowToHigh"> Low to High</option>
          <option value="highToLow"> High to Low</option>
        </select>
      </div>

      {/* category only data */}
      <h2 className="mt-5 font-semibold text-xl">Category</h2>
      <div className="flex flex-col gap-2 mt-3">
        {categoryOnlyData?.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="checkbox"
              name="item"
              checked={category === item}
              value={item}
              onChange={handleCategoryChange}
            />
            <button className=" uppercase">{item}</button>
          </div>
        ))}
      </div>

      {/* brand only data */}
      <h2 className="mt-7 font-semibold text-xl mb-3">Brand</h2>
      <select
        name={brand}
        value={brand}
        onChange={handleBrandChange}
        className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
      >
        {brandOnlyData?.map((item, index) => (
          <option key={index} value={item} className=" uppercase my-2">
            {item}
          </option>
        ))}
      </select>

      {/* prize range */}
      <h2 className="mt-7 font-semibold text-xl mb-3">Price Range</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="range">
          ${prizeRange[0]} - ${prizeRange[1]}
        </label>
        <input
          type="range"
          id="range"
          min={0}
          max={5000}
          value={prizeRange[1]}
          onChange={(e) =>
            setPrizeRange([prizeRange[0], Number(e.target.value)])
          }
        />
      </div>

      <button
        className="bg-red-500 text-white px-3 py-2 mt-6 cursor-pointer rounded-md hover:bg-red-400 font-medium active:bg-red-600"
        onClick={() => {
          handleResetBtn();
          setOpenFilter(false);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
}
