import React from "react";

function Card({ image }) {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/18436938/pexels-photo-18436938/free-photo-of-la-llegada-de-durga.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="title"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 font-bold">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Name</span>
        <span className="text-lg font-bold">$11155</span>
      </p>
    </div>
  );
}

export default Card;
