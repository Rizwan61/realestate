import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../../assets/images/1.jpg'
import image2 from '../../assets/images/2.jpg'
import image3 from '../../assets/images/3.jpg'
import image4 from '../../assets/images/4.jpg'
import image5 from '../../assets/images/5.jpg'
import image6 from '../../assets/images/6.png'
import 'swiper/css';


function BestChoice() {
    const blog = [
        {
            id: 1,
            image: <img src={image1} alt="" class="w-full h-48 object-cover" />,
            heading: "HOMES",
            content: "HOMES",
        },
        {
            id: 2,
            image: <img src={image2} alt="" class="w-full h-48 object-cover" />,
            heading: "DLF King's Court",
            content: "DLF",
        },
        {
            id: 3,
            image: <img src={image3} alt="" class="w-full h-48 object-cover" />,
            heading: "TYIT",
            content: "TYIT",
        },
        {
            id: 4,
            image: <img src={image4} alt="" class="w-full h-48 object-cover" />,
            heading: "Heritage Polonnaruwa",
            content: "Heritage",
        },
        {
            id: 5,
            image: <img src={image5} alt="" class="w-full h-48 object-cover" />,
            heading: "The Radh Hotel",
            content: "fsdfsd",
        },
        {
            id: 6,
            image: <img src={image6} alt="" class="w-full h-48 object-cover" />,
            heading: "Hive 68 - Hotel and Resorts ",
            content: "Hive",
        },
    ]
    return (
        <>

            <div className='my-4'>
                <h4 className='text-yellow-500 mx-10 text-4xl font-bold '>Best Choices</h4>
                <h2 className='mx-10 text-4xl font-bold text-[#1f3e72]'>Popular Residencies</h2>
            </div>
            <div className=' grid grid-rows-2 grid-flow-col gap-4 mx-10 overflow-hidden  '>
                {
                    blog.map(item => {
                        return <div key={item.id}>
                            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
                                <div>
                                    {item.image}
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">{item.heading}</h2>
                                    <p className="text-gray-700">{item.content}</p>
                                </div>

                            </div>


                        </div>
                    })
                }


            </div>
            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                
            </Swiper> */}

        </>
    )
}

export default BestChoice