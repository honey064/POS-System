import React from "react";
import { FaCheckDouble, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { getAvatarName } from "../../utils/index";

const OrderList = ({ key, order }) => {
  return (
    <div className="flex items-center gap-5 mb-3">
      <button className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 text-xl font-bold rounded-lg text-white shadow-lg">
        {getAvatarName(order.customerDetails.name)}
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-white text-lg font-semibold tracking-wide">
            {order.customerDetails.name}
          </h1>
          <p className="text-white/70 text-sm">{order.items.length} Items</p>
        </div>

        <h1 className="text-amber-400 font-semibold border border-amber-400 rounded-lg p-1">
          Table <FaLongArrowAltRight className="text-white/70 ml-2 inline" />{" "}
          {order.table.tableNo}
        </h1>

        <div className="flex flex-col items-end gap-2">
          {order.orderStatus === "Ready" ? (
            <>
              <p className="text-green-300 bg-green-500/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                <FaCheckDouble className="inline mr-2" /> {order.orderStatus}
              </p>
            </>
          ) : (
            <>
              <p className="text-yellow-300 bg-yellow-500/20 backdrop-blur-sm px-2 py-1 rounded-lg">
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
