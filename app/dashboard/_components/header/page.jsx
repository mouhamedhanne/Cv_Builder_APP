"use client";
//import Link from "next/link";

//import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User } from "lucide-react";
import { useUser } from "@clerk/nextjs";

function page() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn && user && user.fullName) {
    return (
      <header>
        <nav className="">
          <div className="w-full grid grid-cols-2 gap-4 p-4 border-b">
            <h1>Home</h1>

            <div className="flex items-center justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user.imageUrl} alt={user.fullName} />
                    <AvatarFallback>
                      <User size="16" />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>

                  <DropdownMenuItem>Notifications</DropdownMenuItem>
                  <DropdownMenuItem>Notez nous</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive hover:!text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Déconnexion</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default page;
