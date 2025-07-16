import React from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, FileText, User } from "lucide-react";

export const StatsCards = () => {
  const stats = [
    {
      title: "Indicators for Rework",
      value: "8",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-white",
    },
    {
      title: "Uploaded Documents (MOVs)",
      value: "67",
      icon: FileText,
      color: "text-red-600",
      bgColor: "bg-white",
    },
    {
      title: "Assigned DILG Assessor",
      value: "Maria Santos",
      icon: User,
      color: "text-slate-600",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card
            key={index}
            className={`p-3 sm:p-4 ${stat.bgColor} border-gray-200 border shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center">
              <div className="mr-3 flex-shrink-0">
                <IconComponent
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-gray-600 mb-1 font-medium">
                  {stat.title}
                </p>
                <p
                  className={`text-lg sm:text-2xl font-bold ${stat.color} truncate`}
                >
                  {stat.value}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
