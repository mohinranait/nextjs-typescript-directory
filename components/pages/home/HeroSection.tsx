'use client';
import React from 'react'
import { FiMapPin } from "react-icons/fi";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AiOutlineHeatMap, AiOutlineSearch } from 'react-icons/ai';
import { Button } from '@/components/ui/button';



const HeroSection: React.FC = () => {
    return (
        <section className='home_hero_section relative' >
            <div className='w-full h-full bg-black bg-opacity-80 absolute'></div>
            <div className="container w-full h-screen flex items-center justify-center relative ">

                <div className=''>
                    <div>
                        <h1 className='text-[50px] text-white font-bold uppercase text-center'>Find what you need!</h1>
                        <p className='text-center text-white font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, deserunt?</p>
                    </div>
                    <div className='flex mx-5 flex-col md:flex-row gap-3 mt-4 bg-white rounded-xl p-4  items-center'>
                        <div className=' flex items-center w-full gap-1 rounded-md border md:border-0 px-3'>
                            <input type='text' name='search' placeholder='Search' className='py-3 px-2 w-full outline-none focus:outline-none' />
                            <AiOutlineSearch className='text-gray-700' />
                        </div>
                        <div className='border md:border-t-0 md:border-b-0 rounded-md md:border-r flex items-center w-full gap-1 md:border-l px-3'>
                            <input type='text' name='search' placeholder='Where' className='py-3 px-2 w-full outline-none focus:outline-none' />
                            <FiMapPin className='text-gray-700' />
                        </div>
                        <div className='w-full border md:border-0 rounded-md'>
                            <Select>
                                <SelectTrigger className="w-full py-4 focus-visible:outline-none  focus:ring-0 focus:outline-none focus:outline-gray-100 border-0 focus:shadow-none">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent className='bg-white'>
                                    <SelectItem value="light" className='cursor-pointer hover:bg-gray-100'>Light</SelectItem>
                                    <SelectItem value="dark" className='cursor-pointer hover:bg-gray-100'>Dark</SelectItem>
                                    <SelectItem value="a" className='cursor-pointer hover:bg-gray-100'>a</SelectItem>
                                    <SelectItem value="b" className='cursor-pointer hover:bg-gray-100'>b</SelectItem>
                                    <SelectItem value="c" className='cursor-pointer hover:bg-gray-100'>c</SelectItem>
                                    <SelectItem value="d" className='cursor-pointer hover:bg-gray-100'>d</SelectItem>
                                    <SelectItem value="e" className='cursor-pointer hover:bg-gray-100'>e</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>
                        <Button
                            className='w-full md:w-auto rounded-xl py-3 text-white'
                        >
                            Search
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection