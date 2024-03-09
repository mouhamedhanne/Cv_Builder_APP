import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function UserItems() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-[#FF4F01]" size="32" />
      </div>
    );
  }

  if (isSignedIn && user && user.fullName) {
    return (
      <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
        <Avatar>
          <AvatarImage src={user.imageUrl} alt={user.fullName} />
          <AvatarFallback>
            <User size="16" />
          </AvatarFallback>
        </Avatar>
        <div className="grow">
          <p className="text-[16px] font-bold">{user.fullName}</p>
          <p className="text-[12px] text-neutral-500">
            {user.emailAddresses.map((email) => (
              <div key={email.emailAddress}>{email.emailAddress}</div>
            ))}
          </p>
        </div>
      </div>
    );
  }
}
