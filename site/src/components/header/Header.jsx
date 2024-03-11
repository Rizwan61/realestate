import React from 'react'
import Navbar from '../navbar/Navbar'
import heroimage from '../../assets/images/hero.png'
import '../header/Header.css'
import { IoLocation } from "react-icons/io5";

import CountUp from 'react-countup';



function Header() {
    const count = [
        {
            id:3,

            heading: "9000",
            content: "Premium Product"
        },
        {
            id:2,

            heading: "2000 ",
            content: "Happy Customer"
        },
        {
            id:1,

            heading: "28 ",
            content: "Awards Winning"
        },


    ]
    return (
        <div className=' bg-[#131110]'>  <Navbar />

            <div className='container mx-auto'>
                <div class="grid grid-rows-1 grid-flow-col gap-4 mx-16">
                    <div className='flex justify-center items-center text-white'>
                        <div>
                            <h1 className='text-8xl font-semibold my-5	'>Discover <br />
                                Most Suitable <br />
                                Property</h1>
                            <span className='block my-5'>Find a variety of properties that suit you very easilty <br />
                                Forget all difficulties in finding a residence for you</span>
                            <div classname="flex items-center ">
                                {/* <div className=''> <IoLocation /></div> */}
                                <input
                                    type="text"
                                    className="border border-gray-300 px-16 py-3 rounded-l-md focus:outline-none"
                                    placeholder="Search by title/city/country..." />
                                <button className="bg-blue-500 text-white py-3 px-5 rounded-r-md">Search</button>
                            </div>
                            <div class="">
                                <div class="flex  gap-4">
                                    {
                                        count.map((item) => {
                                            return (<div key={item.id}>
                                                <div class="  ">

                                                    <div class="font-bold text-2xl my-3 text-center  ">
                                                        <CountUp

                                                            start={0}
                                                            end={item.heading}
                                                            delay={1}
                                                            enableScrollSpy={true}

                                                        />
                                                        <span className='text-yellow-500'>+</span>

                                                    </div>
                                                    <p class=" text-center   dark:text-gray-500  ">{item.content}</p>
                                                </div>


                                            </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className='heroimage'>

                       
                            <img src={heroimage} className='' alt="" />
                       
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Header