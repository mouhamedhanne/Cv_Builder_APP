"use client";

import Link from "next/link";
import { Logo } from "@/components/logo/page";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LogIn } from "lucide-react";

function page() {
  return (
    <header>
      <nav className="bg-home_page w-full z-20 top-0 left-0 py-[1.2rem]">
        <div className="flex justify-between items-center mx-7">
          <div>
            <Logo />
          </div>

          <div className="flex items-center justify-center space-x-3">
            <Link href="https://github.com/mouhamedhanne" target="_blank">
              {" "}
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl hidden lg:block"
              />
            </Link>
            <Link href="/sign-in">
              <Button className="bg-home_secondary hover:bg-home_secondary gap-2">
                Login <LogIn size="16" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default page;
