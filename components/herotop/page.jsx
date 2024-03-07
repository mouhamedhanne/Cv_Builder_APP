"use client";

import CVBuilder from "@/public/assets/Images/cv-basic.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedTooltipPreview from "@/components/_components/animated-tooltip";

export default function page() {
  return (
    <div className="text-white h-full w-full mt-16 pb-20">
      <div className="max-w-6xl h-full w-full m-auto">
        <div>
          <h1
            className="text-2xl text-center font-extrabold leading-normal
              tracking-tighter md:text-4xl lg:text-4xl "
          >
            Créez votre CV professionnel en{" "}
            <span>
              <u className="text-home_secondary">5 minutes</u>
            </span>{" "}
            <span>🚀</span> avec{" "}
            <span className="uppercase  bg-home_secondary text-white px-1 py-2">
              cv builder
            </span>
          </h1>
          <p className="text-[#6B7280] text-center mt-6">
            La plateforme révolutionnaire de création de CV. Transformez votre
            expérience professionnelle en un CV percutant avec facilité.{" "}
          </p>
        </div>

        <div className="flex justify-center items-center mt-4">
          <Button className="bg-home_secondary hover:bg-home_secondary">
            Commencer
          </Button>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Image
            src={CVBuilder}
            alt="basic cv model"
            className="lg:w-[40rem] w-[20rem]"
          />
        </div>
      </div>
      <div className="mt-4">
        <AnimatedTooltipPreview />
      </div>
    </div>
  );
}
