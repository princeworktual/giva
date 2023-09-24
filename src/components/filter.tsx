import React from "react";
import { filterTypes } from "@/types/filter_type";

const Filter = ({ onFilter, current }: any) => {
  return (
    <div className="flex justify-end container w-40 m-5 ">
      <div className="flex justify-end">
        <select
          value={current}
          onChange={(e) => {
            onFilter(e.target.value);
          }}
          className="block w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option value={filterTypes.Popularity}>Popularity</option>
          <option value={filterTypes["Release Date"]}>Release Date</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
