"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Loader2, User, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import UpdateFirstName from "@/app/dashboard/_components/Update/UpdateFirstName/page";
import UpdateLastName from "@/app/dashboard/_components/Update/UpdateLastName/page";

export default function page() {
  const { isSignedIn, user, isLoaded } = useUser();

  console.log(user);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-red-600" size="32" />
      </div>
    );
  }

  if (isSignedIn && user && user.fullName) {
    return (
      <div className="container mx-auto py-8 space-y-8">
        <h1 className="text-xl font-bold">Mon Compte</h1>
        <Card className="px-3">
          <CardHeader>
            <CardTitle>Informations Personnels</CardTitle>
            <CardDescription>
              Gérer vos informations personnelles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle className="mt-4">Profil</CardTitle>
            <Card className="p-3 mt-3">
              <div className="flex items-center justify-between">
                <Avatar>
                  <AvatarImage src={user.imageUrl} alt={user.fullName} />
                  <AvatarFallback>
                    <User size="16" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="ghost" className="gap-2">
                    Update profile <ChevronRight size="16" />
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="p-3 mt-3">
              <div className="flex items-center justify-between">
                <h3>{user.firstName}</h3>
                <div>
                  <UpdateFirstName />
                </div>
              </div>
            </Card>
            <Card className="p-3 mt-3">
              <div className="flex items-center justify-between">
                <h3>{user.lastName}</h3>
                <div>
                  <UpdateLastName />
                </div>
              </div>
            </Card>
            <Card className="p-3 mt-3">
              <div className="block lg:flex items-center justify-between">
                {user.emailAddresses.map((email) => (
                  <div key={email.emailAddress}>{email.emailAddress}</div>
                ))}
              </div>
            </Card>
          </CardContent>
          <CardFooter>
            <p>
              Dernière connexion:{" "}
              {user.lastSignInAt
                ? new Date(user.lastSignInAt).toLocaleString()
                : ""}
            </p>
          </CardFooter>
        </Card>
        <h1 className="text-[23px] font-bold">Hello {user.fullName}!</h1>
      </div>
    );
  }
}
