"use client"
import { FooterPage, FooterSocial } from "@/constans";
import React from "react";


const Footer = () => {
    return (
        <div className="w-full h-[105px] bg-mydark2 relative mt-2 text-white py-4">
            <div className="absolute -top-10 right-[50%] translate-x-[50%] w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[40px] border-b-mydark2 "></div>
            <div className="flex items-center justify-around flex-wrap">
                <div className="hidden md:flex flex-col justify-center items-center gap-1">
                    <p className=" text-xl ">HOTELLO</p>
                    <span className="text-[.6rem] -mt-1 tracking-widest">HOTELS</span>
                </div>
                <div className="flex flex-col sm:ml-20 gap-2">
                    {FooterPage.map(page => (
                        <a key={page.id} className="text-sm text-white hover:text-mylight2">
                            {page.title}
                        </a>
                    ))}
                </div>
                <div>
                    {FooterSocial.map(item => (
                        <>
                            <div key={item.id} className="flex gap-2">
                                <item.icon className=" mt-1" />
                                {item.title}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Footer;
