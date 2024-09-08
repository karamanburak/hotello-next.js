"use client"
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { SliderImage } from "@/constans";

const Hero = () => {
    return (
        <div className="relative h-[32rem]">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3500,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>

                    {SliderImage.map((image) => (
                        <CarouselItem key={image.id}>
                            <Image
                                src={image.href}
                                alt={image.alt}
                                className=" w-full h-[32rem] lg:h-[44rem] object-cover brightness-75"
                                width={1920}
                                height={1080}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
            </Carousel>
        </div>
    )
};

export default Hero;
