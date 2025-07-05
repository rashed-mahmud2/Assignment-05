import loading from "../assets/Loading4.webm";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import notfound from "../assets/notfound.json";
import Lottie from "lottie-react";
import MobileFilter from "./MobileFilter";
import { useFilter } from "../context/FilterContext";
import Filter from "./Filter";
import productsData from "../data/productsData.json";

export default function Products() {
  const data = productsData;
  const { filteredData, page, pageHandler, dynamicPage } = useFilter();

  return (
    <div id="products">
      <div className="max-w-7xl mx-auto px-4 mb-10 mt-5 md:mt-15">
        <MobileFilter />
        {data?.length > 0 ? (
          <div>
            <div className=" flex gap-8">
              <div className="bg-gray-100 p-4 rounded-md h-max hidden md:block sticky top-2">
                {" "}
                <Filter />
              </div>

              {filteredData?.length > 0 ? (
                <div className="flex flex-col justify-center items-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 ">
                    {filteredData
                      ?.slice(page * 12 - 12, page * 12)
                      .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                  </div>
                  <Pagination
                    pageHandler={pageHandler}
                    page={page}
                    dynamicPage={dynamicPage}
                  />
                </div>
              ) : (
                <div className="flex justify-center items-baseline md:h-[600px] md:w-[900px]">
                  <Lottie animationData={notfound} className="md:w-[600px]" />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[400px]">
            <video muted autoPlay loop>
              <source src={loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
