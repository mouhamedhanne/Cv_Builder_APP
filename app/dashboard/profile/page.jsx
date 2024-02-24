import { useAuth } from "@clerk/nextjs";

export default function page() {
  const { isSignedIn, user, isLoaded } = useAuth();

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  if (isSignedIn) {
    return <div>Hello {user.fullName}!</div>;
  }

  return <div>Not signed in</div>;
}

{
  /**
   *
   */
}
