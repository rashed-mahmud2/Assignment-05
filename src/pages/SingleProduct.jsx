import React, { useState } from "react";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import productsData from "../data/productsData.json";
import { Link, useParams } from "react-router";
import notfound from "../assets/notfound.json";
import Lottie from "lottie-react";

export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { id } = useParams();

  const productId = parseInt(id);
  const singleProduct = productsData.find((p) => p.id === productId); // ✅ find product

  const originalPrize =
    Math.round((singleProduct?.price * singleProduct?.discount) / 100) +
    singleProduct?.price;

  return (
    <div className="mt-25">
      {singleProduct ? (
        <div className="px-4 pb-4">
          <Breadcrums title={singleProduct.title} />
          <div className="max-w-7xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* product image */}
            <div className="w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-2xl w-full object-cover hover:scale-110 transition-all duration-300 md:w-[600px]"
              />
            </div>

            {/* Products details */}
            <div className="flex flex-col gap-6">
              <h1 className=" text-xl md:text-3xl font-bold text-gray-700">
                {singleProduct.title}
              </h1>
              <div className="text-gray-600 uppercase">
                <span>{singleProduct.brand}</span> /{" "}
                <span>{singleProduct.category}</span> /{" "}
                <span>{singleProduct.model}</span> /{" "}
                <span>{singleProduct.color}</span>
              </div>
              <p className="font-bold text-xl flex gap-3 items-center">
                <span className=" text-red-500">${singleProduct.price}</span>{" "}
                <span className=" line-through">${originalPrize}</span>
                <span className="text-white bg-red-500 px-2 py-1 rounded-md text-lg font-medium">
                  {singleProduct.discount}% Discount
                </span>
              </p>
              <p className="text-gray-600">{singleProduct.description}</p>
              <div className="flex items-center gap-4">
                <label
                  htmlFor="quantity"
                  className=" font-medium text-gray-500"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min={1}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value) || 1;
                    setQuantity(newValue);
                  }}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    addToCart(singleProduct, quantity);
                    setQuantity(1); // reset quantity input
                  }}
                  className="bg-red-500 text-white rounded-md px-4 py-2 flex text-xl items-center gap-3 font-semibold hover:bg-red-400 active:bg-red-600"
                >
                  <IoCartOutline className="size-6" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen text-center px-4">
          <h1 className="text-6xl font-bold text-red-500/80 mb-4">
            Oh No! Product Not Found!!
          </h1>
          <p className="text-gray-500 mb-6 text-xl">
            The product you're looking for does not exist or may have been
            removed.
          </p>
          <div className="flex justify-center items-baseline md:h-[500px] md:w-[800px]">
            <Lottie animationData={notfound} className="md:w-[500px]" />
          </div>
          <Link
            to="/"
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Go to Home
          </Link>
        </div>
      )}
    </div>
  );
}
