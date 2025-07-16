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
      bgColor: "bg-orange-50"
    },
    {
      title: "Uploaded Documents (MOVs)",
      value: "67",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Assigned DILG Assessor",
      value: "Maria Santos",
      icon: User,
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className={`p-4 sm:p-6 ${stat.bgColor}`}>
            <div className="flex items-center">
              <div className="mr-3 flex-shrink-0">
                <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className={`text-lg sm:text-2xl font-bold ${stat.color} truncate`}>{stat.value}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}; 