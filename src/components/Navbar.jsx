import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useCart } from "../context/CartContext";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export default function Navbar({
  location,
  getLocation,
  openDropdown,
  setOpenDropdown,
}) {
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const { cartItem } = useCart();
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className=" bg-white shadow-2xl py-3 px-4 md:px-0 fixed top-0 left-0 right-0 z-99">
      <div className=" max-w-7xl flex justify-between mx-auto items-center">
        {/* logo secion */}
        <div className="logo flex items-center gap-7">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold whitespace-nowrap">
              <span className=" font-serif text-red-500">K</span>ena
              <span className=" text-red-500 font-serif">K</span>
              ata.com
            </h1>
          </Link>
          <div className="md:flex gap-1 cursor-pointer text-gray-700 items-center hidden">
            <HiOutlineMapPin className=" text-red-500 text-2xl" />
            <div className=" font-semibold text-red-500">
              {location ? (
                <div className=" text-gray-700 -space-y-1">
                  <p>{location.county}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </div>
            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {openDropdown && (
            <div className=" w-[250px] h-max shadow-2xl z-50 bg-white fixed top-18 left-75 border-2 border-gray-100 rounded-md p-4">
              <h3 className="fontsemibold mb-4 text-xl flex justify-between items-center">
                Change Location
                <span onClick={toggleDropdown}>
                  <CgClose />
                </span>
              </h3>
              <button
                className=" bg-red-500 text-white px-3 py-1 rounded-sm hover:bg-red-400"
                onClick={getLocation}
              >
                Detect my location
              </button>
            </div>
          )}
        </div>

        {/* menu section */}
        <nav className=" flex gap-7 items-center">
          <ul className=" md:flex gap-7 items-center text-xl font-medium text-gray-600 hidden">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive && "border-b-3 border-red-500 transition-all"
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive && "border-b-3 border-red-500 transition-all"
                } cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className=" relative">
            <IoCartOutline className=" size-6" />
            <span className=" bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              {cartItem.length}
            </span>
          </Link>
          <div
            className="bg-red-500 text-white px-3 py-1 rounded-md shadow
          transition-all duration-200 hover:scale-105 hover:shadow-lg
          hover:bg-red-400 cursor-pointer  hidden md:block"
          >
            <button>Sign In</button>
          </div>
          {openNav ? (
            <HiMenuAlt3
              onClick={() => setOpenNav(false)}
              className="h-7 w-7 md:hidden"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setOpenNav(true)}
              className="h-7 w-7 md:hidden"
            />
          )}
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
}
