import React from "react";
import SearchIcon from "../Icons/Search";
import Cross from "../Icons/Cross";

function Search() {
  return (
    <div className="top-1/4 left-1/2 -translate-x-1/2 absolute w-1/2">
      <form className="group relative">
        <SearchIcon />
        <input
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Search movies"
          placeholder="Search movies..."
        />
        <Cross />
      </form>
    </div>
  );
}

export default Search;
