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
      <div className="bg-white/10 backdrop-blur-md border border-white/20 w-full h-[450px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-white text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-blue-300 text-sm font-semibold hover:text-blue-200 transition-colors">
            View all
          </a>
        </div>

        <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-[15px] px-6 py-4 mx-6">
          <FaSearch className="text-white" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-transparent outline-none text-white placeholder-white/70 w-full"
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
