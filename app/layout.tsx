import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La plateforme révolutionnaire de création de CV",
  description: "Créez votre CV professionnel en 5 minutes",
  keywords: "",
  creator: "Geek_SN",
  authors: {
    name: "Mouhamed EL MAlick HANNE",
    url: "https://mouhamedhanne.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
