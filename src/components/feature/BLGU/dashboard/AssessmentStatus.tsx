import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const AssessmentStatus = () => {
  return (
    <Card className="p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Barangay San Roque SGLGB Dashboard
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Performance Year: 2023 | Assessment Year: 2024
        </p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Current Assessment Status
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center justify-center sm:justify-start">
            Awaiting Your Submission
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            Continue Assessment
          </Button>
        </div>
      </div>
    </Card>
  );
}; 