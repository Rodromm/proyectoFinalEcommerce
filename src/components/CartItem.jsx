import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from "../redux/bazarSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "./Button";

import { ToastContainer, toast } from "react-toastify";

export const CartItem = () => {
 // var Link = require('/')
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
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} Se elimino`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                src={item.image}
                alt="producto"
                className="w-32 h-32 object-cover"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className="text-sm flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">cantidad</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span onClick={ () => dispatch(decrementQuantity({
                  _id: item._id,
                  title: item.title,
                  image: item.image,
                  proce: item.price,
                  quantity: 1,
                  description: item.description,
                })
                )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-yellow-200">
                  -
                </span>
                {item.quantity}
                <span onClick={ () => dispatch(increamentQuantity({
                  _id: item._id,
                  title: item.title,
                  image: item.image,
                  proce: item.price,
                  quantity: 1,
                  description: item.description,
                })
                )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-yellow-200">
                  +
                </span>

              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
            
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart() & toast.error("¡Tu carrito está vacio!"))
        }
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        reestablecer carrito
      </button>
       <Link to="/">
       <button className="mt-8 flex items-center gap-1 text-black hover:text-green-300 duration-300">
        <span><HiOutlineArrowLeft /></span>
        Seguir Comprando
       </button>
       </Link>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
