import React from "react";
import { cartImg, logoLigth } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

//documentacion de estilos para tailwindcss
//https://tailwindcss.com/docs
//width 28=112px 32=128px 36=144px 40=160px
//top top-px = 1px / top-0.5 = 2px / top-1 = 4px.../.5*2
//left leftpx = 1px / 0.5 = 2px / .5*2

export const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  return (
    <div className="w-full h-20 bg-white border-b-[2px] border-b-gray-900 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        
        <Link to="/">
          <div>
            <img className="w-36" src={logoLigth} alt="logoLigth" />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-green-500 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-green-500 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-green-500 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-green-500 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-green-500 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
          <div className="relative">
            <img className="w-24" src={cartImg} alt="cartImg" />
            <span
              className="absolute w-20 top-12 left-2 text-sm flex items-center
            justify-center font-semibold"
            >
              { productData.length }
            </span>
          </div>
          </Link>
         <Link to="/login">
         <img
            className="w-16 h-16 rounded-full"
            src="https://eastlancashirefreemasons.org/wp-content/uploads/2022/11/Manchester-Mason-VWBro-Nolan-Morrison-celebrates-Sixty-Years-in-Freemasonry-Header.jpeg"
            alt="img"
          />
         </Link>
        </div>
      </div>
     
    </div>
  );
};
//"https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=
//tinysrgb&w=1260&h=750&dpr=1"
