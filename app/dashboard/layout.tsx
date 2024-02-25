import Sidebar from "@/app/dashboard/_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between">
      <div className="hidden lg:flex min-w-[300px] border-r min-h-screen">
        <Sidebar />
      </div>
      <div className="w-full h-full ">{children}</div>
    </div>
  );
}
