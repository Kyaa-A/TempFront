import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Bell } from "lucide-react";

interface DashboardHeaderProps {
  onMenuToggle: () => void;
}

export const DashboardHeader = ({ onMenuToggle }: DashboardHeaderProps) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-red-100 sticky top-0 z-30 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-red-50 mr-4 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>

            {/* Mobile logo - only show on small screens */}
            <div className="lg:hidden flex items-center">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-red-100 to-orange-100 p-1">
                <Image
                  src="/DILG.png"
                  alt="DILG Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-2">
                <h1 className="text-sm font-bold text-gray-900">VANTAGE</h1>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700 hidden sm:block font-medium">
              Welcome, Juan Dela Cruz
            </span>
            <span className="text-sm text-gray-700 sm:hidden font-medium">
              Juan Dela Cruz
            </span>
            <Button variant="ghost" size="sm" className="font-semibold">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
