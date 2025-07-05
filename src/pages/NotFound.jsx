import React from "react";
import notfound from "../assets/notfound.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4 mt-30">
      <h1 className="text-5xl md:text-6xl font-bold text-red-500/80 mb-5">
        404 page Not Found!!
      </h1>
      <p className="text-gray-500 mb-0 text-2xl">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="flex justify-center items-baseline md:h-[600px] md:w-[900px] -mt-15">
        <Lottie animationData={notfound} className="md:w-[600px]" />
      </div>
      <Link
        to="/"
        className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
