import Header from "@/app/dashboard/_components/header/page";
import BentoGrid from "@/app/dashboard/_components/bentoGrid/page";

export default function page() {
  return (
    <>
      <Header />
      <div className="pl-7 pt-3">
        <div className="">
          <BentoGrid />
        </div>
      </div>
    </>
  );
}
