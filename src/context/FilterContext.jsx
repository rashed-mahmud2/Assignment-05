import { createContext, useContext, useState } from "react";
import productsData from "../data/productsData.json";

export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const data = productsData;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [prizeRange, setPrizeRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  // First apply all filters
  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= prizeRange[0] &&
      item.price <= prizeRange[1]
  );

  // Then apply sorting to the filtered results
  const sortedAndFilteredData = filteredData ? [...filteredData] : [];

  if (sortOrder === "lowToHigh") {
    sortedAndFilteredData.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    sortedAndFilteredData.sort((a, b) => b.price - a.price);
  }

  const defaultOrder = () => {
    setSortOrder("default");
    setOpenFilter(false);
    window.scrollTo(0, 0);
  };
  const lowToHigh = () => {
    setSortOrder("lowToHigh");
    setOpenFilter(false);
    window.scrollTo(0, 0);
  };
  const highToLow = () => {
    setSortOrder("highToLow");
    setOpenFilter(false);
    window.scrollTo(0, 0);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");

  const dynamicPage = Math.ceil(filteredData?.length / 12);

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        category,
        setCategory,
        brand,
        setBrand,
        prizeRange,
        setPrizeRange,
        page,
        setPage,
        openFilter,
        setOpenFilter,
        handleCategoryChange,
        handleBrandChange,
        pageHandler,
        dynamicPage,
        sortOrder,
        setSortOrder,
        defaultOrder,
        lowToHigh,
        highToLow,
        filteredData: sortedAndFilteredData,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
