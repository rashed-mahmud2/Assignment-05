import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LucideNotebookText } from "lucide-react";
import { TbTruckDelivery } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import emptyCart from "../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";

export default function Cart({ location, getLocation }) {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const [locationData, setLocationData] = useState({
    county: location?.county || null,
    country: location?.country || null,
    state: location?.state || null,
  });

  useEffect(() => {
    if (location) {
      setLocationData({
        county: location.county || "",
        state: location.state || "",
        country: location.country || "",
      });
    }
  }, [location]);

  const navigate = useNavigate();

  console.log(cartItem);

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-15 max-w-7xl mx-auto mb-10 px-4 ">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl">My Cart ({cartItem.length})</h1>
          <div>
            <div className="mt-10 flex flex-col gap-4">
              {cartItem.map((item, index) => (
                <div
                  key={index}
                  className=" pr-0 pl-2 py-2 md:p-5 rounded-md flex items-center justify-between w-full bg-gray-100"
                >
                  <div className="flex items-center gap-2 md:gap-5">
                    <img
                      className="w-20 h-20 rounded-md bg-white"
                      src={item.image}
                      alt={item.title}
                    />
                    <div>
                      <h1 className="md:w-[300px] line-clamp-2">
                        {item.title}
                      </h1>
                      <p className="text-red-500 font-bold text-lg">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                    <button
                      onClick={() =>
                        updateQuantity(cartItem, item.id, "decrease")
                      }
                      className="cursor-pointer active:scale-105 hover:bg-white/30"
                    >
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(cartItem, item.id, "increase")
                      }
                      className="cursor-pointer active:scale-105 hover:bg-white/30"
                    >
                      +
                    </button>
                  </div>

                  <div
                    onClick={() => deleteItem(item.id)}
                    className="hover:bg-white/60 transition-all rounded-md p-3 hover:shadow-2xl"
                  >
                    <FaRegTrashAlt className="text-2xl text-red-500 active:scale-105" />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-5">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-3">
                <h1 className="text-gray-800 font-bold text-xl">
                  Delivery Info
                </h1>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your name"
                    className="p-2 rounded-md border border-gray-300"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={locationData.county}
                    onChange={(e) =>
                      setLocationData((prev) => ({
                        ...prev,
                        county: e.target.value,
                      }))
                    }
                    placeholder="Enter your Address"
                    className="p-2 rounded-md border border-gray-300"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      value={locationData.state}
                      onChange={(e) =>
                        setLocationData((prev) => ({
                          ...prev,
                          state: e.target.value,
                        }))
                      }
                      placeholder="Enter your state"
                      className="p-2 rounded-md border border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      value={locationData.country}
                      onChange={(e) =>
                        setLocationData((prev) => ({
                          ...prev,
                          country: e.target.value,
                        }))
                      }
                      placeholder="Enter your country"
                      className="p-2 rounded-md border border-gray-300"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="postcode">Postcode</label>
                    <input
                      type="text"
                      id="postcode"
                      placeholder="Enter your postcode"
                      className="p-2 rounded-md border border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="p-2 rounded-md border border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <button className="bg-red-500 text-white text-lg px-3 py-[5px] rounded-md mt-3 hover:bg-red-400 active:bg-red-600">
                    Submit
                  </button>
                </div>
                <div className="text-center mt-10">
                  <p className="text-gray-700">---------OR---------</p>
                  <button
                    onClick={() => getLocation()}
                    className="mt-3 bg-red-500 text-white text-lg rounded-md px-4 py-2 hover:bg-red-400 active:bg-red-600"
                  >
                    Detect Location
                  </button>
                </div>
              </div>
              <div className="border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                <h1 className="text-gray-800 font-bold text-xl">
                  Bill details
                </h1>
                <div className="flex justify-between items-center">
                  <h3 className="flex gap-2 items-center text-gray-700">
                    <span>
                      <LucideNotebookText />
                    </span>
                    Item Total
                  </h3>
                  <p>${totalPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="flex gap-2 items-center text-gray-700">
                    <span>
                      <TbTruckDelivery className="size-6" />
                    </span>
                    Delevery Charge
                  </h3>
                  <p>
                    <span className=" line-through text-gray-600">$25</span>
                    <span className="text-red-500 font-medium uppercase ms-2">
                      Free
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="flex gap-2 items-center text-gray-700">
                    <span>
                      <GiShoppingBag className="size-6" />
                    </span>
                    Handling Charge
                  </h3>
                  <p className="text-red-500 font-medium">$5</p>
                </div>
                <hr className="text-gray-200 mt-4" />
                <div className="flex justify-between items-center">
                  <h3 className="flex gap-2 items-center text-gray-700 font-bold text-lg">
                    Grand total
                  </h3>
                  <p className="font-medium">${totalPrice + 5}</p>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-700 text-lg mb-3 mt-7">
                    Apply Promo Code
                  </h2>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="p-2 rounded-md w-full border border-gray-300"
                    />
                    <button className="border border-gray-200 px-3 py-[9px] rounded-md active:scale-105">
                      Apply
                    </button>
                  </div>
                  <div className="mt-6">
                    <button className="bg-red-500 w-full text-white rounded-md py-2 text-lg">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center h-[600px]">
          <h1 className="text-red-500 font-bold text-5xl">
            Oh no! Your cart is empty
          </h1>
          <img src={emptyCart} alt="Emptycart" className="w-[400px]" />
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-400 active:bg-red-600 text-lg"
          >
            Countinew Shopping
          </button>
        </div>
      )}
    </div>
  );
}
