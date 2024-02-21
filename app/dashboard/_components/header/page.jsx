"use client";
//import Link from "next/link";
import Logo from "@/components/logo/page";
//import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

function page() {
  //const { userId } = auth();

  return (
    <header>
      <nav
        className=" bg-white opacity-95 shadow border-gray-200
         fixed w-full z-20 top-0 left-0 border-b border-gray-200
         pt-[1.2rem] pb-2"
      >
        <div className="flex justify-between items-center mx-7">
          <div>
            <Logo />
          </div>

          <div className="flex items-center justify-center space-x-3">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default page;
