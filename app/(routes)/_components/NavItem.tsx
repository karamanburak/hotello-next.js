import Link from "next/link";
import React from "react";

interface NavItemProps {
    title: string;
    url: string;
}

const NavItem = ({ title, url }: NavItemProps) => {
    return (
        <Link href={url}>
            <div className="cursor-pointer hover:text-white hover:text-opacity-100 hover:shadow-[0_2px_0_0_white] transition-all duration-100">
                {title}
            </div>
        </Link>
    )
};

export default NavItem;
