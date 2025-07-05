import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Link } from "react-router";

export default function ResponsiveMenu({ openNav, setOpenNav }) {
  return (
    <div
      className={`${
        openNav ? "left-0" : "left-[-100%]"
      } fixed bottom-0 top-0 z-30 flex h-screen w-[70%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black/70 md:hidden rounded-r-xl shadow-md transition-all duration-300`}
    >
      <div>
        <div className="flex items-center gap-3">
          <FaRegUserCircle className="size-8" />
          <div>
            <h1>Hello,</h1>
            <h4 className="flex items-center gap-1 text-sm">
              <MdOutlineWorkspacePremium /> Premium User
            </h4>
          </div>
        </div>
        <nav className="mt-8">
          <ul className="flex flex-col text-2xl gap-7 font-semibold">
            <Link
              to={"/"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>Home</li>
            </Link>

            <Link
              to={"/about"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>About</li>
            </Link>
          </ul>
        </nav>
        <div className="mt-10">
          <p className="text-sm">Made by ❤️ Rashed Mahmud</p>
        </div>
      </div>
    </div>
  );
}
