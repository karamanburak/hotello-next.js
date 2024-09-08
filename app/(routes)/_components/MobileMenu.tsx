import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
import { NavMenu } from "@/constans";
import NavItem from "./NavItem";


const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger><MenuIcon /></SheetTrigger>
            <SheetContent className="bgone">
                <SheetHeader>
                    <SheetDescription>
                        <div className="flex flex-col text-xl mt-8 lg:hidden items-center ml-auto gap-9">

                            {NavMenu.map((item, index) => (
                                <NavItem key={index} {...item} />
                            ))}
                        </div>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )

};

export default MobileMenu;
