import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "./Button";
import { deleteItem } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";


export const CartItem = () => {
    const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2x1">Shopping</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose onClick={ () => dispatch(deleteItem(item._id))&toast.error(`${item.title} Se elimino`)} className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300" />
              <img
                src={item.image}
                alt="producto"
                className="w-32 h-32 object-cover"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            {/* boton */}
            <Button />
            <p className="">${item.quantity * item.price}</p>

          </div>
        ))}
      </div>
      <button className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800">reestablecer carrito</button>
      < ToastContainer 
      position="bottom-right"
      autoClose = {5000}
      hideProgressBar = {false}
      newestOnTop = {false}
      closeOnClick
      rtl = {false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </div>
  );
};
