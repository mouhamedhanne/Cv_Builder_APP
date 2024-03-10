"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento";
import { IconFileBroken, IconSignature } from "@tabler/icons-react";
import CVBasic from "@/public/assets/Images/cv-basic.png";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}


const BasicTemplate = () => {
  return (
    <div>
      <Link href="/dashboard/build-cv/basic-model">
        <Image src={CVBasic} alt="template cv basic" width={180} />
      </Link>
    </div>
  );
};

const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl
     dark:bg-dot-white/[0.2] border-black
     bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]
     border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"
  >
    <div className="flex justify-center items-center mx-auto">
      En Construction...
    </div>
  </div>
);
const items = [
  {
    title: "Basic Model 🔥",
    header: <BasicTemplate />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CV Canadien 🤔🚀",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
