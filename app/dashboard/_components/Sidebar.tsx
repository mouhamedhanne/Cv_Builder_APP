"use client";

import {
  Cookie,
  MessageCircleQuestion,
  MessageSquare,
  Settings,
  Bell,
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
          link: "/dashboard",
          icon: <Home />,
          text: "Home",
        },
        {
          link: "/dashboard/build-cv",
          icon: <IconeCv />,
          text: "Créer un CV",
        },
        {
          link: "/dashboard",
          icon: <Bell />,
          text: "Notifications",
        },
        {
          link: "/dashboard",
          icon: <MessageCircleQuestion />,
          text: "Aide & FAQ",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/dashboard",
          icon: <MessageSquare />,
          text: "Support",
        },
        {
          link: "/dashboard",
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
    <>
      <div className={``}>
        <div
          className={`fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen`}
        >
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
                        <Link
                          href={option.link}
                          className="flex items-center gap-2"
                        >
                          {option.icon}
                          {option.text}
                        </Link>
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
      </div>
    </>
  );
}
