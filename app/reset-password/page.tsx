"use client";

import React, { useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Loader2, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const ForgotPasswordPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    toast.success("Mot de passe réinitialiser, vous êtes connecté");
    router.push("/dashboard");
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    await signIn
      ?.create({
        strategy: "reset_password_email_code",
        identifier: email,
      })
      .then((_) => {
        setSuccessfulCreation(true);
        setError("");
      })
      .catch((err) => {
        console.error("error", err.errors[0].longMessage);

        setError(err.errors[0].longMessage);
        toast.error("Votre adresse email est incorrect !");
      });
    setIsLoading(false);
  }

  async function reset(e: React.FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    await signIn
      ?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      })
      .then((result) => {
        // Check if 2FA is required
        if (result.status === "needs_second_factor") {
          setSecondFactor(true);
          setError("");
        } else if (result.status === "complete") {
          setActive({ session: result.createdSessionId });
          setError("");
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        console.error("error", err.errors[0].longMessage);
        toast.error("Code incorrect ou expiré");
        setError(err.errors[0].longMessage);
      });

    setIsLoading(false);
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <form onSubmit={!successfulCreation ? create : reset}>
          {!successfulCreation && (
            <>
              <h1 className="mb-3">Mot de passe oublié?</h1>
              <label htmlFor="email" className="block mb-3">
                Veuillez fournir votre adresse e-mail
              </label>
              <Input
                type="email"
                placeholder="exemple@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />

              <Button disabled={isLoading} className="gap-2">
                {isLoading ? (
                  <Loader2 size="16" className="animate-spin" />
                ) : (
                  <Mail size="16" />
                )}
                Envoyer le code de réinitialisation
              </Button>
              {error && (
                <p className="text-red-500 mt-2">
                  Entrez une adresse email valide.
                </p>
              )}
            </>
          )}

          {successfulCreation && (
            <>
              <div className="mx-5">
                <label htmlFor="password" className="block mb-3">
                  Entrez votre nouveau mot de passe
                </label>
                <Input
                  type="password"
                  value={password}
                  placeholder="nouveau mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-3"
                />

                <label htmlFor="password" className="block mb-3">
                  Entrez le code de réinitialisation du mot de passe qui a été
                  envoyé à votre adresse e-mail
                </label>
                <Input
                  type="text"
                  value={code}
                  placeholder="code de validation"
                  onChange={(e) => setCode(e.target.value)}
                />

                <Button disabled={isLoading} className="mt-4 gap-2">
                  {isLoading ? (
                    <RotateCcw size="16" className="animate-spin" />
                  ) : (
                    <Mail size="16" />
                  )}
                  Réinitialiser
                </Button>
                {error && <p className="text-red-500 mt-2">Entrez le code</p>}
              </div>
            </>
          )}

          {secondFactor && (
            <p>
              2FA est requis, mais cette interface utilisateur ne gère pas cela
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
