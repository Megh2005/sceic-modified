"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
    const cardsData = [
        {
            id: 1,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263336/1_pvef2w.png",
            title: "Analytical and Numerical Modeling and Computation",
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263336/2_n9mdox.png",
            title:
                "Smart Materials for Civil Engineering Construction",
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263336/3_ibi5mt.png",
            title: "Structural health monitoring and Retrofitting",
        },
        {
            id: 4,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263336/4_akau9q.png",
            title: "Remote Sensing and Geo informatics",
        },
        {
            id: 5,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263338/5_ttw0wj.png",
            title: "Air, Noise and Solid waste management",
        },
        {
            id: 6,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263336/6_gi1kze.png",
            title: "Road Safety and Traffic management",
        },
        {
            id: 7,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263336/7_v7gazi.png",
            title: "Geo-Environmental Engineering",
        },
        {
            id: 8,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263338/8_okwwoq.png",
            title: "Advances in Geotechnical Engineering",
        },
        {
            id: 9,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263338/9_e28otf.png",
            title:
                "Sustainable Green Infrastructure and Building",
        },
        {
            id: 10,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263338/10_lngjbi.png",
            title: "Water and Wastewater Quality and Treatment",
        },
        {
            id: 11,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263338/11_igadrd.jpg",
            title: "Disaster risk assessment and management",
        },
        {
            id: 12,
            url: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1732263338/12_t6pngs.jpg",
            title: "Case studies for Sustainable Civil Engineering Application.",
        },
];


    return (
        <div className="inter-var px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardsData.map((card, index) => (
                <CardContainer key={index} className="w-full">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            {card.title}
                        </CardItem>
                        
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={card.url}
                                height="800"
                                width="800"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
}
