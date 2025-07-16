import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    <Card className="p-4 sm:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <span className="mr-2">💬</span>
          <span className="truncate">Recent Comments from Your Assessor</span>
        </h3>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
              <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-medium inline-block w-fit">
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

      <div className="mt-6">
        <Button variant="outline" className="w-full sm:w-auto">
          📝 View All Comments
        </Button>
      </div>
    </Card>
  );
};
