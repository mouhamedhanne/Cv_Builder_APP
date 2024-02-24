"use client";

import { useUser } from "@clerk/nextjs";

export default function page() {
  const { isSignedIn, user, isLoaded } = useUser();

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
      </div>
    );
  }

  return <div>Not signed in</div>;
}

{
  /**
 return (
    <>
      <div className="flex gap-4 pl-7 pt-3">
        <h1 className="text-[23px] font-bold">Heureux de vous revoir</h1>
      </div>
    </>
  );

   const { isSignedIn } = useAuth();
  const { isLoaded } = useSignIn();
  const { user } = useUser;

   useAuth, useSignIn,
 */
}
