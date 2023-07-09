import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

export const ProductsCards = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  //console.log(rootId);

  const handleDetails = () => {
    // console.log("details");
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group relative">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer over overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-125 duration-500"
          src={product.image}
          alt="imagen producto"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          {/*footer cards */}
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-700">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} agregado`)
              }
              className="absolute z-20 w-[100px] text-red-900 hover:text-red-700 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-700"
            >
              Agregar{" "}
              <span>
                {" "}
                <BsFillCartCheckFill />{" "}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-yellow-200 font-bold font-titleFont px-6 py-1">
              venta
            </p>
          )}
        </div>
      </div>
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
      theme="light"
      />
    </div>
  );
};
