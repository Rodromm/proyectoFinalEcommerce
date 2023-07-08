import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useLocation } from "react-router-dom";
//react-redux.js.org quick start


export const Product = () => {
  const [details, setDetails] = useState({});
  const Location = useLocation();
  useEffect(() => {
    setDetails(Location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="imagen"
          />
          <div className="absolute top-4">
            {details.isNew && (
              <p className="bg-yellow-200 font-extrabold  px-8 py-1">
                COMPRA AHORA
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4x1 font-bold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-gray-500">
                ${details.oldPrice}
              </p>
              <p className="text-2x1 font-medium text-black">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-400">(reseña)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center  justify-between gap-4	border p-3">
              <p className="text-sm">Cantidad</p>

              {/*buttons*/}
              <div className="flex items-center gap-4 text-base font-bold">
                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-yellow-200 hover:text-green-500 cursor-pointer duration-500 active:bg-black">
                  -
                </button>
                <span>{1}</span>
                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-yellow-200 hover:text-green-500 cursor-pointer duration-500 active:bg-black">
                  +
                </button>
              </div>
            </div>
            <button className="bg-yellow-200 px-6 py-3  active:bg-white active:text-yellow-500">
              Agregar al carrito
            </button>
          </div>
          <p className="text-base text-gray-500">
            {" "}
            Categoria:{" "}
            <span className="font-medium capitalize">
              {details.category}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
