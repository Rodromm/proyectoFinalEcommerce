import React, { useState } from 'react'
//import { HiArrowRigth, HiArrowLeft } from "react-icons/hi"
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc" ; 


//https://react-icons.github.io/react-icons/icons?name=vsc 
//flechas vc y hi react icons
//

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
 const data = [
    "https://scontent.fmid2-1.fna.fbcdn.net/v/t39.30808-6/358108893_248415191273636_1155494854985892975_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=_6wK4TddA90AX8rqaNT&_nc_ht=scontent.fmid2-1.fna&oh=00_AfBrCGnr3F5QaCWIAUxq2IVzqyUy-M4DTEYxMh43lax2RA&oe=64ABF459",
    "https://scontent.fmid2-1.fna.fbcdn.net/v/t39.30808-6/358098727_248415341273621_5652271514492817256_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=5t_LG4dydvIAX_XaNdy&_nc_ht=scontent.fmid2-1.fna&oh=00_AfAvCJEWXpH4NP5Peh6ho2KCETWHydktO6l8iC1ne1KQHQ&oe=64ABA6A9",
    "https://scontent.fmid2-1.fna.fbcdn.net/v/t39.30808-6/358110679_248415501273605_6157098828914482139_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=_C_d_WM5ahcAX8JP2h3&_nc_ht=scontent.fmid2-1.fna&oh=00_AfBzpBogkjjYNqdbJTHT0gx1y4fZ2HUmWSDyPCxMyHXFdQ&oe=64ABD3FF",
    "https://scontent.fmid2-1.fna.fbcdn.net/v/t39.30808-6/358091690_248459691269186_1763100963272603738_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=s6pNHp5RgWIAX8IpDDf&_nc_ht=scontent.fmid2-1.fna&oh=00_AfB5A8M2Q1BT_e7XIrXe_Ycz4rlYwWz-QYfXR0OkIjJFuA&oe=64AA9EDF",
    ""
 ];

 const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
 };

 const nextSlide = () =>{
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
 };

 //console.log(currentSlide);
 
    return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] realtive'>
            <div className= 'w-[400vw] h-full flex transition-transform duration-1000' 
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
                <img className='w-screen h-full object-cover'
                src={data[0]} 
                alt='img' 
                loading='priority'
                />
                 <img className='w-screen h-full object-cover'
                src={data[1]} 
                alt='img' 
                
                />
                 <img className='w-screen h-full object-cover'
                src={data[2]} 
                alt='img' 
                
                />
                 <img className='w-screen h-full object-cover'
                src={data[3]} 
                alt='img' 
                
                />
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className= 'w-14 h-12 border-[1px] flex items-center justify-center border-gray-700 hover:text-green-600 hover:bg-black active:bg-black duration-300'>
                    <VscArrowLeft />
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] flex items-center justify-center border-gray-700 hover:text-green-600  hover:bg-black active:bg-black duration-300'>
                    <VscArrowRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;