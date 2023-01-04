import React from "react";

function Header() {
  return (
    <div className="flex">
      <h1 className="text-left text-3xl text-zinc-300 pt-4 pl-4 font-serif">
        Vega<span className="text-slate-400">Movies</span>
      </h1>
      <ul className="inline-flex pt-6 pl-80 text-xl space-x-12 text-slate-400 font-serif font-normal">
        <li>
          <button><a href="/">Home</a></button>
        </li>
        <li>
          <button><a href="/Trending">Trending</a></button>
        </li>
        <li>
          <button><a href="/shows">Shows</a></button>
        </li>
      </ul>
      <div className="text-right pt-6 border-transparent pl-72  ">
      <input type="text" placeholder="Search..." className="rounded-md h-6 w-45 pl-2 border-double"/>
      <button className="text-slate-400 pl-4 font-bold font-serif">Search</button></div>
    </div>
  );
}

export default Header;
