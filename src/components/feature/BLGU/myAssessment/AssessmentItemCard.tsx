import React from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AssessmentItem } from "./assessmentTypes";
import { getStatusColor, getStatusIcon, getStatusLabel } from "./assessmentUtils";

interface AssessmentItemCardProps {
  item: AssessmentItem;
  onClick: (itemId: string) => void;
}

export const AssessmentItemCard: React.FC<AssessmentItemCardProps> = ({
  item,
  onClick,
}) => {
  return (
    <Card
      className="p-6 bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(item.id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
        <div className="ml-6">
          <div className="relative">
            <div
              className={`flex items-center px-3 py-2 rounded-lg border font-medium text-sm ${getStatusColor(
                item.status
              )}`}
            >
              {getStatusIcon(item.status)}
              <span className="ml-2">
                {getStatusLabel(item.status)}
              </span>
              <ChevronDown className="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}; 