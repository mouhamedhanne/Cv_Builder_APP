import Navigation from "@/components/navigation/page";
import Herotop from "@/components/herotop/page";

export default function page() {
  return (
    <>
      <div className="bg-home_page">
        <Navigation />
        <div className="">
          <Herotop />
        </div>
      </div>
    </>
  );
}
