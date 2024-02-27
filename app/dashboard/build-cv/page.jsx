import Header from "@/app/dashboard/_components/header/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Header />
      <div className="h-screen w- screen flex justify-center items-center">
        <Link href="/dashboard/build-cv/model-demo">
          <Button>Model demo</Button>
        </Link>
      </div>
    </>
  );
}
