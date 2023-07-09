import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

export const Button = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  return (
    <div>
        <div className="w-52 flex items-center  justify-between gap-4	border p-3">
      <p className="text-sm">Cantidad</p>
      <div className="flex items-center gap-4 text-base font-bold">
        <button
          onClick={() =>
            setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
          }
          className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-yellow-200 hover:text-green-500 cursor-pointer duration-500 active:bg-black"
        >
          -
        </button>
        <span>{baseQty}</span>
        <button
          onClick={() => setBaseQty(baseQty + 1)}
          className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-yellow-200 hover:text-green-500 cursor-pointer duration-500 active:bg-black"
        >
          +
        </button>
      </div>
    </div>
    
    </div>
  );
};
