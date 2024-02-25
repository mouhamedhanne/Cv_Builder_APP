"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function page() {
  const { isSignedIn, user, isLoaded } = useUser();

  console.log(user);

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  if (isSignedIn && user && user.fullName) {
    return (
      <div className=" pl-7 pt-3">
        <h1 className="text-[23px] font-bold">Hello {user.fullName}!</h1>
        <div>
          {user.emailAddresses.map((email) => (
            <div key={email.emailAddress}>{email.emailAddress}, </div>
          ))}
        </div>
        <Image
          src={user.imageUrl}
          width={250}
          height={250}
          alt={user.fullName}
          className="rounded-lg"
        />
      </div>
    );
  }

  return <div>Not signed in</div>;
}
