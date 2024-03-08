"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/tooltip";
import User1 from "@/public/assets/Images/user/user1.jpg";
import User2 from "@/public/assets/Images/user/user2.jpg";
import User3 from "@/public/assets/Images/user/user3.jpg";
import User4 from "@/public/assets/Images/user/user4.jpg";
import User5 from "@/public/assets/Images/user/user5.jpg";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: User1,
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: User2,
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: User3,
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: User4,
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: User5,
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}


