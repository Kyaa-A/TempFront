"use client";

import { useState } from "react";
import { Sidebar } from "@/components/feature/BLGU/dashboard";
import { ProfileForm } from "@/components/feature/BLGU/profile";
import { DashboardHeader } from "@/components/feature/BLGU/dashboard";

export default function ProfilePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* top right */}
        <div className="absolute -top-40 -right-40 w-48 h-48 lg:w-60 lg:h-60 xl:w-80 xl:h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-0 animate-fade-in-blob animation-delay-800 animate-blob"></div>
        {/* bottom left */}
        <div className="absolute -bottom-40 -left-40 w-48 h-48 lg:w-60 lg:h-60 xl:w-80 xl:h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-0 animate-fade-in-blob animation-delay-2000 animate-blob"></div>
        {/* top left */}
        <div className="absolute top-40 left-40 w-48 h-48 lg:w-60 lg:h-60 xl:w-80 xl:h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-0 animate-fade-in-blob-light animation-delay-4000 animate-blob"></div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="lg:ml-64">
        <DashboardHeader onMenuToggle={toggleSidebar} />

        <main className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6 overflow-x-hidden relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="opacity-0 animate-fade-in animation-delay-200">
              <ProfileForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
