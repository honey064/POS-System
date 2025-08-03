import React from "react";
import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div className="mt-6 pr-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 w-full rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-white text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a href="" className="text-blue-300 text-sm font-semibold hover:text-blue-200 transition-colors">
            View all
          </a>
        </div>

        <div className="overflow-y-scroll h-[680px] scrollbar-hide">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-[15px] px-6 py-4 mt-4 mx-6 hover:bg-white/30 transition-all"
              >
                <h1 className="text-white font-bold text-xl mr-4">{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div>
                  <h1 className="text-white font-semibold tracking-wide">{dish.name}</h1>
                  <p className="text-white text-sm font-semibold mt-1">
                    <span className="text-white/70">Orders: </span>
                    {dish.numberOfOrders}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
