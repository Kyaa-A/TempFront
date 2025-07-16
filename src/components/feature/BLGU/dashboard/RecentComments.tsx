import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Eye } from "lucide-react";

export const RecentComments = () => {
  const comments = [
    {
      id: "IND-001",
      comment:
        "Please provide additional documentation for budget allocation...",
      date: "Dec 15, 2024",
    },
    {
      id: "IND-045",
      comment: "The submitted MOV needs to be updated with current data...",
      date: "Dec 12, 2024",
    },
    {
      id: "IND-078",
      comment: "Good compliance shown, minor formatting adjustments needed...",
      date: "Dec 10, 2024",
    },
  ];

  return (
    <Card className="p-3 sm:p-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <MessageCircle className="mr-2 h-5 w-5 text-red-600" />
          <span className="truncate">Recent Comments from Your Assessor</span>
        </h3>
      </div>

      <div className="space-y-3">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border-b border-red-100 pb-3 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-2">
              <div className="bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium inline-block w-fit border border-red-200">
                {comment.id}
              </div>
              <span className="text-sm text-gray-500 flex-shrink-0">
                {comment.date}
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {comment.comment}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Button
          variant="destructive"
          className="w-full sm:w-auto font-semibold"
        >
          <Eye className="h-5 w-5" />
          View All Comments
        </Button>
      </div>
    </Card>
  );
};
