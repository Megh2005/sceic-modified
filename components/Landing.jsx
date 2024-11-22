import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

export function BackgroundBeamsWithCollisionDemo() {
    function handleRedirect(url) {
        window.open(url, '_blank');
    }
    return (
        <BackgroundBeamsWithCollision className="flex-col">
            <h2
                className="text-2xl w-[100vw] relative -z-0 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                Sustainable Civil Engineering & Infrastructural Construction<br />
                <div
                    className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div
                        className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                        <span className="">Future Should Be Sustainable</span>
                    </div>
                </div>
            </h2>
            {/* Buttons Section */}
            <div className="flex justify-center gap-10 mt-8">
                <Link href="/about" className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md shadow-md hover:bg-purple-700 transition">
                    Learn More
                </Link>
                <Link href="https://form.jotform.com/242584794523062" target="_blank" className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2 font-medium bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        Submit Paper
                    </div>
                </Link>
            </div>
        </BackgroundBeamsWithCollision>
    );
}
