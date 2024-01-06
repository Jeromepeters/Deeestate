import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className=" flex text-white p-3 justify-around items-center max-w-6xl mx-auto">
        <Link to={"/"}>
          <h1 className="font-bold flex flex-wrap text-sm sm:text-xl">
            <span className="text-slate-500">Dee</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            className=" bg-transparent focus:outline-none text-slate-700 "
            placeholder="Searching..."
          />
          <FaSearch className="text-slate-700" />
        </form>
        <ul className="flex gap-4">
          <Link
            to={"/"}
            className="hidden sm:inline text-slate-700 hover:underline"
          >
            <li>Home</li>
          </Link>
          <Link to={"/sign-in"} className=" text-slate-700 hover:underline">
            <li>Sign in</li>
          </Link>
          <Link
            to={"/sign-up"}
            className="hidden sm:inline  text-slate-700 hover:underline"
          >
            <li>Sign up</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
