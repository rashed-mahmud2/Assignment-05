import React from "react";
import { useNavigate } from "react-router";

export default function Breadcrums({ title }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto my-7 md:my-15">
      <h1 className="text-xl text-gray-700 font-semibold">
        <span
          onClick={() => navigate("/")}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>{" "}
        / <span>Products</span> / <span>{title}</span>
      </h1>
    </div>
  );
}
