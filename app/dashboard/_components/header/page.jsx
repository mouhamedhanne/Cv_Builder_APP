"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User, Bell } from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoDashboardLight from "@/public/assets/Images/logo-dashboard-light-mode.png";
import Image from "next/image";
import { Loader2 } from "lucide-react";

function page() {
  const { isSignedIn, user, isLoaded } = useUser();

  const { signOut } = useClerk();
  const router = useRouter();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-[#FF4F01]" size="32" />
      </div>
    );
  }

  if (isSignedIn && user && user.fullName) {
    return (
      <header>
        <nav className="">
          <div className="w-full grid grid-cols-2 gap-4 p-4 border-b items-center">
            <Image
              src={LogoDashboardLight}
              alt="logo dashboard"
              width={70}
              className="lg:hidden ml-[9rem]"
            />
            <h1 className="hidden lg:block text-home_secondary font-extrabold">
              CV BUILDER
            </h1>

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
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href="notifications">
                      <Bell className="mr-2 h-4 w-4" />
                      <span>Notifications</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Button
                      onClick={() => signOut(() => router.push("/"))}
                      variant="destructive"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Déconnexion</span>
                    </Button>
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
