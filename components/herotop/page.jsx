"use client";

import CVBuilder from "@/public/assets/Images/cv-basic.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedTooltipPreview from "@/components/_components/animated-tooltip";
import Link from "next/link";

export default function page() {
  return (
    <div className="text-white h-full w-full mt-16 pb-20">
      <div className="max-w-6xl px-6 lg:px-0 h-full w-full m-auto">
        <div>
          <h1
            className="text-2xl text-center font-extrabold leading-normal
              tracking-tighter lg:text-4xl"
          >
            Créez votre CV professionnel en{" "}
            <span>
              <u className="text-home_secondary">5 minutes</u>
            </span>{" "}
            <span>🚀</span>
            avec{" "}
            <span className="uppercase bg-home_secondary text-white px-1 py-2">
              cv builder
            </span>
          </h1>
          <p className="text-[#6B7280] text-center mt-6">
            La plateforme révolutionnaire de création de CV. Transformez votre
            expérience professionnelle en un CV percutant avec facilité.{" "}
          </p>
        </div>

        <div className="flex justify-center items-center mt-4 hover:opacity-90">
          <Link href="/sign-in">
            <Button className="bg-home_secondary hover:bg-home_secondary rounded-[1rem]">
              Essayer Gratuitement
            </Button>
          </Link>
        </div>

        <div className="mt-5">
          <AnimatedTooltipPreview />
        </div>

        <div className="flex justify-center items-center gap-2 mt-3 text-yellow-500">
          <div className="flex items-center gap-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <p className="whitespace-nowrap font-extrabold">+30 user trust us</p>
        </div>

        <div className="flex justify-center items-center mt-10">
          <Image
            src={CVBuilder}
            alt="basic cv model"
            className="lg:w-[40rem] w-[20rem]"
          />
        </div>
      </div>
    </div>
  );
}
