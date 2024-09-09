"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    arrivalDate: z.date().refine(date => !!date, { message: "Arrival date is required!" }),
    departureDate: z.date().refine(date => !!date, { message: "Departure date is required!" }),
    adults: z.string().array().nonempty({ message: "Select number of adults!" }),
    children: z.string().array().nonempty({ message: "Select number of children!" }),
})

const HeroForm = () => {
    return (
        <div className="absolute bottom-20   w-full flex justify-center">
            <div className="mx-auto container justify-center flex">
                <div className="bg-myLight2 bg-opacity-65 p-6 w-full max-w-4xl shadow-lg rounded-xl text-white">

                    Hero Form
                    <button className="bg-[#1A3131]"></button>
                </div>

            </div>
        </div>
    )
};

export default HeroForm;
