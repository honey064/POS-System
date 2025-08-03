import React from "react";
import { FaCheckDouble, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { getAvatarName } from "../../utils/index";

const OrderList = ({ key, order }) => {
  return (
    <div className="flex items-center gap-5 mb-3">
      <button className="bg-indigo-500 p-3 text-xl font-bold rounded-lg text-white shadow-lg">
        {getAvatarName(order.customerDetails.name)}
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-white text-lg font-semibold tracking-wide">
            {order.customerDetails.name}
          </h1>
          <p className="text-gray-400 text-sm">{order.items.length} Items</p>
        </div>

        <h1 className="text-indigo-400 font-semibold border border-indigo-400 rounded-lg p-1">
          Table <FaLongArrowAltRight className="text-gray-400 ml-2 inline" />{" "}
          {order.table.tableNo}
        </h1>

        <div className="flex flex-col items-end gap-2">
          {order.orderStatus === "Ready" ? (
            <>
              <p className="text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded-lg border border-emerald-700">
                <FaCheckDouble className="inline mr-2" /> {order.orderStatus}
              </p>
            </>
          ) : (
            <>
              <p className="text-amber-400 bg-amber-900/30 px-2 py-1 rounded-lg border border-amber-700">
                <FaCircle className="inline mr-2" /> {order.orderStatus}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
