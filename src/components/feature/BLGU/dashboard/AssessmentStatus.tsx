import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const AssessmentStatus = () => {
  return (
    <Card className="p-3 sm:p-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          Barangay San Roque SGLGB Dashboard
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Performance Year: 2023 | Assessment Year: 2024
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Current Assessment Status
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center justify-center sm:justify-start border border-red-200">
            Awaiting Your Submission
          </div>
          <Button
            variant="destructive"
            size="lg"
            className="w-full sm:w-auto font-semibold"
          >
            Continue Assessment
          </Button>
        </div>
      </div>
    </Card>
  );
};
