import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BarChart3, FileText, User, X, LogOut } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const menuItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: FileText, label: "My Assessment", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:fixed lg:translate-x-0 z-50 lg:z-auto
        w-64 bg-white/95 backdrop-blur-sm h-screen shadow-xl border-r border-red-100
        transform transition-transform duration-300 ease-in-out
        lg:left-0 lg:top-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex-shrink-0">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-red-100 to-orange-100 p-1">
                  <Image
                    src="/DILG.png"
                    alt="DILG Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-lg font-bold text-gray-900">VANTAGE</h1>
                  <p className="text-sm text-gray-600">
                    Barangay Submission Portal
                  </p>
                </div>
              </div>
              {/* Close button for mobile */}
              <button
                onClick={onToggle}
                className="lg:hidden p-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                      item.active
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    <IconComponent className="mr-3 w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex-grow"></div>

          <div className="p-6 flex-shrink-0">
            <Button
              variant="destructive"
              className="w-full flex items-center justify-start font-semibold"
            >
              <LogOut className="mr-2 w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
