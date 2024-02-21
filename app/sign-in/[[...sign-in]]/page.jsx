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
import Link from "next/link";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";

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
          <CardTitle className="">Se Connecter</CardTitle>
          <CardDescription className="">
            Connectez-vous au tableau de bord
          </CardDescription>
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
            Mot de passe
          </label>
          <Input
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
          />
        </div>
        <div>
          <Link
            href="/reset-password"
            className=" mt-2 text-sm flex justify-end underline hover:text-blue-700"
          >
            Mot de passe oublié?
          </Link>
        </div>

        <CardFooter className="mt-6 flex justify-center">
          <Button onClick={handleSubmit} className="gap-2">
            <LogIn size="16" /> Se Connecter
          </Button>
        </CardFooter>
        <div className="flex gap-2 items-center justify-center">
          <p>Vous n'avez de compte?</p>
          <Link href="/sign-up" className="text-blue-700">
            Sign-In
          </Link>
        </div>
      </Card>
    </form>
  );
}
