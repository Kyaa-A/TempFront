import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Bell } from "lucide-react";

interface DashboardHeaderProps {
  onMenuToggle: () => void;
}

export const DashboardHeader = ({ onMenuToggle }: DashboardHeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 mr-4"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Mobile logo - only show on small screens */}
            <div className="lg:hidden flex items-center">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/DILG.png"
                  alt="DILG Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-2">
                <h1 className="text-sm font-medium text-gray-900">VANTAGE</h1>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 hidden sm:block">
              Welcome, Juan Dela Cruz
            </span>
            <span className="text-sm text-gray-600 sm:hidden">
              Juan Dela Cruz
            </span>
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
