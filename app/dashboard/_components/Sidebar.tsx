"use client";

import {
  Component,
  Cookie,
  MessageCircleQuestion,
  MessageSquare,
  Settings,
} from "lucide-react";
import UserItems from "@/app/dashboard/_components/UserItem";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import LogoDashboardLight from "@/public/assets/Images/logo-dashboard-light-mode.png";
import Image from "next/image";
import { Home } from "lucide-react";
import { IconeCv } from "@/components/logo/page";
import Link from "next/link";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <Home />,
          text: "Home",
        },
        {
          link: "/",
          icon: <IconeCv />,
          text: "Build CV",
        },
        {
          link: "/",
          icon: <Component />,
          text: "Models CV",
        },
        {
          link: "/",
          icon: <MessageCircleQuestion />,
          text: "Aide & FAQ",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Support",
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Confidentialité",
        },
        {
          link: "/dashboard/profile",
          icon: <Settings />,
          text: "Réglages",
        },
      ],
    },
  ];

  return (
    //fixed
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <Image src={LogoDashboardLight} alt="logo dashboard" width={50} />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem
                    key={optionKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>
        <UserItems />
      </div>
    </div>
  );
}
