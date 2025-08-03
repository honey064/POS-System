import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { getOrders } from "../../https/index";

const RecentOrders = () => {
  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  return (
    <div className="px-8 mt-6">
      <div className="bg-gray-900/50 backdrop-blur-sm w-full h-[450px] rounded-xl border border-gray-800">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-white text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors">
            View all
          </a>
        </div>

        <div className="flex items-center gap-4 bg-gray-800/50 rounded-xl px-6 py-4 mx-6 border border-gray-700">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
          />
        </div>

        {/* Order list */}
        <div className="mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-hide">
          {resData?.data.data.length > 0 ? (
            resData.data.data.map((order) => {
              return <OrderList key={order._id} order={order} />;
            })
          ) : (
            <p className="col-span-3 text-gray-500">No orders available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
