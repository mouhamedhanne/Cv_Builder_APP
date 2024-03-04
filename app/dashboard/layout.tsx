"use client";

import Sidebar from "@/app/dashboard/_components/Sidebar";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarIcon, setSidebarIcon] = useState(<Menu size={24} />);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setSidebarIcon(isSidebarOpen ? <Menu size={24} /> : <X size={24} />);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" flex items-start justify-between">
      <div
        className={` ${
          isSidebarOpen ? "min-w-[300px]" : "hidden"
        } border-r min-h-screen`}
      >
        <Sidebar />
      </div>

      <div className="relative w-full h-full">
        {window.innerWidth < 1024 && (
          <button className="absolute top-6 left-4" onClick={toggleSidebar}>
            {sidebarIcon}
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
