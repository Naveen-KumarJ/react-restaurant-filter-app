import React, { useState } from "react";
import data from "../data.js";
import CardComponent from "./CardComponent.jsx";

const ContextComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [rating, setRating] = useState("");

  const filteredData = data.filter((info) => {
    const matchesSearch = info.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesRating = rating === "" || Math.floor(info.rating) === parseInt(rating);
    return matchesSearch && matchesRating;
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-white rounded-md shadow mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <label className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-gray-700 font-medium">Select Rating</span>
          <input
            type="number"
            min={0}
            max={5}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </label>
      </div>

      <div className="bg-purple-100 grid md:grid-cols-3 gap-5 rounded-md p-4">
        {filteredData.length > 0 ? (
          filteredData.map((info) => (
            <CardComponent key={info._id.$oid} info={info} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600">No results found.</p>
        )}
      </div>
    </>
  );
};

export default ContextComponent;
