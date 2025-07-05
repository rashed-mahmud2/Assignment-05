import React from "react";

export default function Pagination({ page, pageHandler, dynamicPage }) {
  const getPages = (current, total) => {
    const pages = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, "...", total);
      } else if (current >= total - 1) {
        pages.push(1, "...", total - 2, total - 1, total);
      } else {
        pages.push(1, "...", current - 1, current, current + 1, "...", total);
      }
    }
    return pages;
  };

  return (
    <div className="space-x-3 sm:space-x-5 mt-10">
      <button
        onClick={() => pageHandler(page - 1)}
        disabled={page === 1}
        className={`${
          page === 1 ? "bg-red-400" : "bg-red-500"
        } text-white font-medium py-1 px-3 rounded-md cursor-pointer hover:bg-red-400 active:bg-red-600`}
      >
        Prev
      </button>
      {getPages(page, dynamicPage)?.map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => typeof item === "number" && pageHandler(item)}
            className={`cursor-pointer font-medium text-xl ${
              item === page ? "text-red-600" : "text-gray-400"
            }`}
          >
            {item}
          </span>
        );
      })}
      <button
        onClick={() => pageHandler(page + 1)}
        disabled={page === dynamicPage}
        className={`${
          page === dynamicPage ? "bg-red-400" : "bg-red-500"
        } text-white font-medium py-1 px-3 rounded-md cursor-pointer hover:bg-red-400 active:bg-red-600`}
      >
        Next
      </button>
    </div>
  );
}
