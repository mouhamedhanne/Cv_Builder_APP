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
import { Loader2, LogIn } from "lucide-react";
import Link from "next/link";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    setIsLoading(true);

    if (password.length < 8) {
      toast.error("Le mot de passe doit continir 8 carateres");
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        toast.success("Connexion réussi !");
        router.push("/dashboard");
      } else {
        console.log(result);
      }
    } catch (err) {
      toast.error("Adresse email ou mot de passe incorrect !");
      console.error("error", err.errors[0].longMessage);
    } finally {
      setIsLoading(false);
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
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="gap-2 bg-home_secondary
            hover:bg-home_secondary hover:opacity-90"
          >
            {isLoading ? (
              <Loader2 size="16" className="animate-spin" />
            ) : (
              <LogIn size="16" />
            )}
            Se Connecter
          </Button>
        </CardFooter>
        <div className="flex gap-2 items-center justify-center">
          <p>Vous n'avez de compte?</p>
          <Link href="/sign-up" className="text-blue-700">
            Inscription
          </Link>
        </div>
      </Card>
    </form>
  );
}
