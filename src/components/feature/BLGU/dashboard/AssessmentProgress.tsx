import React from "react";
import { Card } from "@/components/ui/card";

export const AssessmentProgress = () => {
  const progress = 75;
  const total = 120;
  const percentage = (progress / total) * 100;

  return (
    <Card className="p-3 sm:p-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
        <h3 className="text-lg font-semibold text-gray-900">
          Assessment Progress
        </h3>
        <span className="text-sm text-gray-600 font-medium">
          {progress} / {total} Indicators Compliant
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-sm text-gray-600">
        <span className="font-medium text-red-600">
          {percentage.toFixed(1)}%
        </span>{" "}
        complete - Keep up the great work!
      </p>
    </Card>
  );
};
