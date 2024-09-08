"use client"
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import React from "react";
import UserToggle from "./UserToggle";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "@/constans";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";


const Navbar = () => {

    const pathname = usePathname()

    return (
        <div className={`w-full z-20 items-center ${pathname != '/' ? 'bg-mydark2' : 'fixed'}`}>
            <div className="">
                <div className="px-8 py-6 flex items-center justify-around">
                    <div className="py-4 px-3 rounded-xl bg-white">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={150}
                            height={150}
                            className="w-12 h-11"
                        />
                    </div>
                    <div className="lg:flex hidden items-center gap-9 ml-auto text-white">
                        {NavMenu.map((item, index) => (
                            <NavItem key={index} {...item} />
                        ))}
                    </div>
                    <div className="flex items-center ml-auto gap-2">
                        <UserToggle />
                        <ModeToggle />
                        <div className="lg:hidden flex items-center ml-auto gap-2 text-white">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
