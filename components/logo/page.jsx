import LogoPage from "@/public/assets/Images/logo-landing-page.png";
import Image from "next/image";
import Link from "next/link";
import Icone from "@/public/assets/Images/curriculum-vitae.png";

export const Logo = () => {
  return (
    <>
      <div>
        <Link href="/">
          <Image src={LogoPage} alt="logo landing page" />
        </Link>
      </div>
    </>
  );
};

export const IconeCv = () => {
  return (
    <>
      <Image src={Icone} alt="icone cv" width={25} />
    </>
  );
};
