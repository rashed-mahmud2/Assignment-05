import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-100 rounded-lg cursor-pointer hover:scale-102 md:hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
      <img
        onClick={() => navigate(`/products/${product.id}`)}
        src={product.image}
        className="aspect-square bg-white mb-3"
      />
      <h1 className="line-clamp-1 p-1 font-medium capitalize">
        {product.title}
      </h1>
      <p
        onClick={() => navigate(`/products/${product.id}`)}
        className="line-clamp-2 text-sm text-slate-600"
      >
        {product.description}
      </p>
      <p className="my-2 text-lg text-gray-800 font-bold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-red-500 px-2 md:px-3 py-[6px] md:py-2 text-lg rounded-md text-white flex justify-center items-center gap-1 font-medium w-full hover:bg-red-400 active:bg-red-600"
      >
        <IoCartOutline className="size-6" /> Add to Cart
      </button>
    </div>
  );
}
