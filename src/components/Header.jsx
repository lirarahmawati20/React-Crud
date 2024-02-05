import About from "../pages/About";
import Home from "../pages/Home";
import { IoHome } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
//import { ShoppingCart} from "lucide-react";

// import Card from "./Card";



export default function Header(){
    return (
      <header className="py-4 px-6 bg-white flex items-center justify-between shadow-lg">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-4 w-1/2">
            <img src="vite.svg" alt="Logo" className="w-10" />
            <h1 className="text-orange-700 text-xl">ShopeeLIRA </h1>
          </div>
          <nav className="flex w-1/2">
            <ul className="flex w-full justify-evenly">
              <li className="list-none flex items-center gap-2 cursor-pointer">
                <IoHome size={25} />
                <Link to="home" className="no-underline text-black text-xl">
                  Home
                </Link>
              </li>
              <li className="list-none flex items-center gap-2 cursor-pointer">
                <IoMdInformationCircle size={25} />
                <Link to="about" className="no-underline text-black text-xl">
                  About
                </Link>
              </li>
              <li className="list-none flex items-center gap-2 cursor-pointer">
                <CgProfile size={25} />
                <Link to="contac" className="no-underline text-black text-xl">
                  Account
                </Link>
              </li>
            </ul>
          </nav>
          <div className="list-none flex items-center gap-2 cursor-pointer">
            {/* <Card/> */}
            <button className="bg-amber-900 text-white px-6 h-10 rounded-full">
              Login
            </button>
          </div>
        </div>
      </header>
    );
}