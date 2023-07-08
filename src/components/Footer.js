import React from "react";
import { ImGithub } from "react-icons/im";
import { FaFacebook, FaHome, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { logoLigth, payLogo } from "../assets";
import { MdLocationOn } from "react-icons/md"
import { BsPersonFill, BsPaypal } from "react-icons/bs"

export const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-x1 mx-auto grid grid-cols-4">
        {/*logo inicio-payment*/}
        <div className="flex flex-col  gap-7 marg ml-8">
          <img className="w-32 mt--116 p" src={logoLigth} alt="logo" />
          <p className="text-white text-sm tracking-wide ">
            Freemasonry-shopping
          </p>
          <img className="w-56" src={payLogo} alt="payment" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2x1 font-extrabold text-white mb-4 mt-14">
            Ubicación
          </h2>
          <div className="text-base flex flex-col gap-2">
            <p>Mérida,Yucatan</p>
            <p>Telefono: 99999999</p>
            <p>e-mail: Freemasonry@mail.com</p>
          </div>
        </div>


            {/*Cuentas*/}
        <div>
          <h2 className="text-2x1 font-extrabold text-white mb-4 mt-14">
            Cuentas
          </h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"> <span><BsPersonFill /></span> Nuestra cuenta</p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"> <span><BsPaypal /></span> Pay Pal</p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"> <span><FaHome /></span> Nuestra Ubicación</p>
          
            
       
        </div>



      </div>
    </div>
  );
};
