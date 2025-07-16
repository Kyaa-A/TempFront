import React from "react";
import { Card } from "@/components/ui/card";

export const AssessmentProgress = () => {
  const progress = 75;
  const total = 120;
  const percentage = (progress / total) * 100;

  return (
    <Card className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <h3 className="text-lg font-semibold text-gray-900">Assessment Progress</h3>
        <span className="text-sm text-gray-600 font-medium">
          {progress} / {total} Indicators Compliant
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div 
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <p className="text-sm text-gray-600">
        {percentage.toFixed(1)}% complete - Keep up the great work!
      </p>
    </Card>
  );
}; 