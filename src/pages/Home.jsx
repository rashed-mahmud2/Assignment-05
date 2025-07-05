import React from "react";
import Carousel from "../components/Carousel";
import MidBanner from "../components/MidBanner";
import Feature from "../components/Features";

import Products from "../components/Products";

export default function Home() {
  return (
    <div className="mt-17">
      <Carousel />
      <Products />
      <MidBanner />
      <Feature />
    </div>
  );
}
