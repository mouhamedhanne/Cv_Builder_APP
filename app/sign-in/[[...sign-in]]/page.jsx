"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        /*Investigate why the login hasn't completed */
        console.log(result);
      }
    } catch (err) {
      console.error("error", err.errors[0].longMessage);
    }
  };

  return (
    <form className="h-screen w-screen flex justify-center items-center">
      <Card className="px-12 py-3">
        <CardHeader>
          <CardTitle className="">Login</CardTitle>
          <CardDescription className="">Login to dashboard</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <Input
            placeholder="exemple@exemple.com"
            onChange={(e) => setEmailAddress(e.target.value)}
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <Input
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
          />
        </div>

        <CardFooter className="mt-6 flex justify-center">
          <Button onClick={handleSubmit} className="gap-2">
            <LogIn size="16" /> Login
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
