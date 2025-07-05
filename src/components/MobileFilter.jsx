import React from "react";
import { FaFilter } from "react-icons/fa6";
import Filter from "./Filter";
import { useFilter } from "../context/FilterContext";

export default function MobileFilter() {
  const { openFilter, setOpenFilter } = useFilter();
  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div>
      <div className="bg-gray-200 flex justify-between items-center md:hidden px-4 py-2 mb-5">
        <h1 className="font-semibold text-xl">Filters</h1>
        <FaFilter onClick={toggleFilter} className="text-gray-800" />
      </div>
      {openFilter ? (
        <div className="bg-gray-100 p-4 md:hidden">
          <Filter />
        </div>
      ) : null}
    </div>
  );
}
