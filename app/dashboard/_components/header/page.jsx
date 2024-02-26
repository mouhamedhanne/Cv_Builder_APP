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
import { LogOut, User } from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  const { isSignedIn, user, isLoaded } = useUser();

  const { signOut } = useClerk();
  const router = useRouter();

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
                  <DropdownMenuItem>
                    <Link href="/dashboard/profile">Profile</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>Notifications</DropdownMenuItem>
                  <DropdownMenuItem>Notez nous</DropdownMenuItem>
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
