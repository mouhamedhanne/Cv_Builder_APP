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
import Link from "next/link";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(err);
    }
  };

  const onPressVerify = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      {!pendingVerification && (
        <form
          onSubmit={handleSubmit}
          className="h-screen w-screen flex justify-center items-center"
        >
          <Card className="px-[4rem] py-3">
            <CardHeader>
              <CardTitle className="">Create Account</CardTitle>
              <CardDescription className="">
                Create Your Account
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <div className="mb-4">
              <label htmlFor="first_name" className="block mb-2">
                First Name
              </label>
              <Input
                placeholder="John"
                type="text"
                name="first_name"
                id="first_name"
                onChange={(e) => setFirstName(e.target.value)}
                required={true}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block mb-2">
                Last Name
              </label>
              <Input
                placeholder="Doe"
                type="text"
                name="last_name"
                id="last_name"
                onChange={(e) => setLastName(e.target.value)}
                required={true}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <Input
                placeholder="exemple@exemple.com"
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <Input
                placeholder="********"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
            </div>

            <CardFooter className="mt-6 flex justify-center">
              <Button type="submit" className="gap-2">
                Create Account
              </Button>
            </CardFooter>
            <div className="flex gap-2 items-center justify-center">
              <p>Have an account?</p>
              <Link href="/sign-in" className="m-0 text-blue-700">
                Sign-In
              </Link>
            </div>
          </Card>
        </form>
      )}

      {pendingVerification && (
        <form className="h-screen w-screen flex justify-center items-center">
          <Input
            placeholder="Enter Verification Code..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button type="submit" onClick={onPressVerify}>
            Verify Email
          </Button>
        </form>
      )}
    </>
  );
}
