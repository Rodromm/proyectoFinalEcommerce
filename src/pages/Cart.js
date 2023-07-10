import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../components/CartItem'
import { ToastContainer, toast } from "react-toastify";

export const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  //console.log(productData);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect( () => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price
    });
    setTotalAmt(price.toFixed(2));
  },[productData])
  return (
    <div>
      <img src='https://images.pexels.com/photos/230515/pexels-photo-230515.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' className='w-full h-60 object-cover'></img>
      <div className='max-w-screen-x1 mx-auto py-20 flex'>
        <CartItem />
        <div className='w1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-600 pb-6'>
            <h2 className='text-2x1 font-medium'>Total</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>$ {totalAmt} </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              shipping{" "}
              <span>
                lorem, ipsum dolor sit amet consetur adipising elit, quos, veirtaise
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            Total <span className='text-x1 font-bold'> $ {totalAmt} </span>
          </p>
          <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-yellow-200 duration-300'>Ir a pagar</button>
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
      theme="colored"
      />
    </div>
  )
}
