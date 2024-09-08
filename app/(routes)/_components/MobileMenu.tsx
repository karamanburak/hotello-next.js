import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";


const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger><MenuIcon /></SheetTrigger>
            <SheetContent className="bgone">
                <SheetHeader>
                    <SheetDescription>


                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )

};

export default MobileMenu;
