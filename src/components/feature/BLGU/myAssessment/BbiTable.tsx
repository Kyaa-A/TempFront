import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AssessmentItem } from "./assessmentTypes";
import { getStatusColor, getStatusIcon } from "./assessmentUtils";

interface BbiTableProps {
  items: AssessmentItem[];
}

export const BbiTable: React.FC<BbiTableProps> = ({ items }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Barangay-Based Institutions (BBI)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  BBI Name
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Compliance Status
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">
                      {item.title}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="relative inline-block">
                      <div
                        className={`flex items-center px-3 py-2 rounded-lg border font-medium text-sm w-fit ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {getStatusIcon(item.status)}
                        <span className="ml-2">
                          {item.status === "compliant"
                            ? "Functional"
                            : item.status === "rework-needed"
                            ? "Non-Functional"
                            : "Pending"}
                        </span>
                        <ChevronDown className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-sm font-medium"
                    >
                      Upload EO/Document
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}; 