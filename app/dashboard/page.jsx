"use client";

import Header from "@/app/dashboard/_components/header/page";
import { Loader2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function page() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-red-600" size="32" />
      </div>
    );
  }

  if (isSignedIn && user && user.fullName) {
    return (
      <>
        <Header />
        <div className="pl-7 pt-3">
          <h1 className="text-[23px] font-bold">Hello {user.fullName}!</h1>
          <div>
            {user.emailAddresses.map((email) => (
              <div key={email.emailAddress}>{email.emailAddress}</div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
