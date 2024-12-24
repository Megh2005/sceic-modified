"use client";

import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Considering the enormous scope of Civil Engineering, this conference covers a wide range of discipline and expertise. Evidently the Civil Engineering has been very much contributing to human development and the quality of life through the provision of infrastructure. However, on the other hand, those infrastructural developments may cause environmental degradation. Therefore, in recent times, the role of Civil Engineers is to progress the infrastructure development process towards sustainability, which has become more important than before.Along with the main theme, the conference will also cover other important aspects in Civil Engineering and its allied branches. The conference is being organized with main focus to address the future of Civil Engineering practitioners, innovation and sustainability requirements. It facilitates a platform to present ideas and discuss future R&D requirements that would enhance sustainable development in the field of Civil Engineering
`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-start space-y-16 px-4">
      {/* Responsive Image */}
      <div className="w-full max-w-3xl mt-12">
        <Image
          src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1732257414/hero_zhvz43.png"
          alt="Hero Image"
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
      {/* Text Generator */}
      <div className="w-screen px-4">
        <TextGenerateEffect words={words} className="text-justify -mt-20" />
      </div>
    </div>
  );
}
