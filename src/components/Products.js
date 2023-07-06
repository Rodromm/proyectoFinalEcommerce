import React from "react";
import { ProductsCards } from "./ProductsCards";

//taiwlind relleno vertical py- padding-top/paddig-bottom
//relleno horizontal px- padding-left/padding-right
//relleno un solo lado pr- padding-rigth

export const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <span className="w-20 h-[3px] bg-black"></span>
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center ">
          Freemasonry-Shopping
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-700 text-center">
          Este producto vendido por un vendedor extranjero es importado y puede
          ser diferente a la versión disponible en México. Aplican términos y
          condiciones separados. 
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCards />
      </div>
    </div>
  );
};
