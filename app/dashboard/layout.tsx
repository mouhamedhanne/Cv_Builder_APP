import Sidebar from "@/app/dashboard/_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between">
      <Sidebar />
      <div className="w-full h-full pl-[300px]">{children}</div>
    </div>
  );
}
