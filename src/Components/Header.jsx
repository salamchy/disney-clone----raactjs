import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItems from './HeaderItems';
import Avtar from './../assets/Images/avtar.png';

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "ORIGINALS",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <img src={logo} alt="logo" className='w-[120px] md:[115px] object-cover cursor-pointer' />

                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItems name={item.name} Icon={item.icon} />
                    ))}
                </div>

                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItems name={""} Icon={item.icon} />
                    ))}
                </div>

                <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                    <HeaderItems name={""} Icon={HiDotsVertical} />
                    {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 md:pr-2'>
                        {menu.map((item, index) => index > 2 && (
                            <HeaderItems name={item.name} Icon={item.icon} />
                        ))}
                    </div> : null}
                </div>
            </div>

            <img src={Avtar} alt="Avtar" className='w-[40px] rounded-full' />

        </div>
    )
}

export default Header