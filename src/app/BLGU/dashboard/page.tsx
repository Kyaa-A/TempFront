"use client";

import { useState } from "react";
import {
  DashboardHeader,
  AssessmentStatus,
  AssessmentProgress,
  StatsCards,
  RecentComments,
  Sidebar,
} from "@/components/feature/BLGU/dashboard";

export default function BLGUDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="lg:ml-64">
        <DashboardHeader onMenuToggle={toggleSidebar} />

        <main className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-6 lg:space-y-8">
              {/* Current Assessment Status */}
              <AssessmentStatus />

              {/* Assessment Progress */}
              <AssessmentProgress />

              {/* Stats Cards */}
              <StatsCards />

              {/* Recent Comments */}
              <RecentComments />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
