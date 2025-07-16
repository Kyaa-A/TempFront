import React from "react";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export const getStatusColor = (status: string) => {
  switch (status) {
    case "compliant":
      return "bg-green-100 text-green-800 border-green-200";
    case "rework-needed":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "pending":
      return "bg-gray-100 text-gray-800 border-gray-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const getStatusIcon = (status: string): React.ReactElement => {
  switch (status) {
    case "compliant":
      return <CheckCircle className="w-4 h-4" />;
    case "rework-needed":
      return <AlertCircle className="w-4 h-4" />;
    case "pending":
      return <Clock className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

export const getStatusLabel = (status: string) => {
  switch (status) {
    case "compliant":
      return "Compliant";
    case "rework-needed":
      return "Rework Needed";
    case "pending":
      return "Pending";
    default:
      return "Pending";
  }
}; 