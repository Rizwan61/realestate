import React from 'react'
import Slider from "react-slick";

import image1 from '../../assets/images/1.jpg'
import image2 from '../../assets/images/2.jpg'
import image3 from '../../assets/images/3.jpg'
import image4 from '../../assets/images/4.jpg'
import image5 from '../../assets/images/5.jpg'
import image7 from '../../assets/images/7.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function BestChoice() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
            image: <img src={image3} alt="" class="w-full h-48 object-cover" />,
            heading: "Hive 68 - Hotel and Resorts ",
            content: "Hive",
        },
    ]
    return (
        <>

            <div className='my-10'>
                <h4 className='text-yellow-500 mx-10 text-4xl font-bold '>Best Choices</h4>
                <h2 className='mx-10 text-4xl font-bold text-[#1f3e72]'>Popular Residencies</h2>
            </div>
            <div className="slider-container ">
                <Slider {...settings}>
                    {
                        blog.map(item => {


                            return <div className='box' key={item.id}>
                                <div className="mx-5  hover:bg-gradient-to-b from-[#ffffff00] to-[#88a0ff75]  hover:shadow-[0_35px_60px_-15px_rgba(136,160,255,0.21)] rounded ">
                                    <div>
                                        {item.image}
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>
                                        <p className="text-gray-700">{item.content}</p>
                                    </div>

                                </div>


                            </div>
                        })


                    }


                </Slider>
            </div>
        </>
    )
}

export default BestChoice