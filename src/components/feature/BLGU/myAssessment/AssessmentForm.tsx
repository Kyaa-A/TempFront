import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AssessmentSection } from "./assessmentTypes";
import { SectionTabs } from "./SectionTabs";
import { AssessmentItemCard } from "./AssessmentItemCard";
import { BbiTable } from "./BbiTable";
import { AssessmentModal } from "./AssessmentModal";

export const AssessmentForm = () => {
  const [assessmentSections] = useState<AssessmentSection[]>([
    {
      id: "financial",
      title: "Financial Admin",
      items: [
        {
          id: "financial-1",
          title: "Structure: Organized BADAC",
          description: "The barangay has established and organized a Barangay Anti-Drug Abuse Council (BADAC) in accordance with RA 9165 and its implementing rules and regulations.",
          status: "compliant",
        },
        {
          id: "financial-2",
          title: "BADAC Plan Development",
          description: "Development of comprehensive BADAC plan",
          status: "rework-needed",
        },
        {
          id: "financial-3",
          title: "BADAC Meeting Documentation",
          description: "Regular meeting documentation and records",
          status: "pending",
        },
      ],
    },
    {
      id: "disaster",
      title: "Disaster Preparedness",
      items: [
        {
          id: "disaster-1",
          title: "Emergency Response Plan",
          description: "Comprehensive emergency response procedures",
          status: "compliant",
        },
        {
          id: "disaster-2",
          title: "Evacuation Procedures",
          description: "Clear evacuation routes and procedures",
          status: "pending",
        },
      ],
    },
    {
      id: "safety",
      title: "Safety, Peace & Order",
      items: [
        {
          id: "safety-1",
          title: "Community Safety Program",
          description: "Programs for maintaining community safety",
          status: "compliant",
        },
        {
          id: "safety-2",
          title: "Peace and Order Committee",
          description: "Active peace and order committee",
          status: "rework-needed",
        },
      ],
    },
    {
      id: "social",
      title: "Social Protection",
      items: [
        {
          id: "social-1",
          title: "Social Services Program",
          description: "Programs for vulnerable populations",
          status: "pending",
        },
        {
          id: "social-2",
          title: "Health and Wellness",
          description: "Community health and wellness initiatives",
          status: "compliant",
        },
      ],
    },
    {
      id: "bbi",
      title: "BBI Functionality",
      items: [
        {
          id: "bbi-1",
          title: "Barangay Development Council (BDC)",
          description: "Organized and functional barangay development council",
          status: "compliant",
        },
        {
          id: "bbi-2",
          title: "Barangay Tanod",
          description: "Active barangay peacekeeping force",
          status: "compliant",
        },
        {
          id: "bbi-3",
          title: "Barangay Health Workers",
          description: "Organized community health workers",
          status: "rework-needed",
        },
        {
          id: "bbi-4",
          title: "Lupong Tagapamayapa",
          description: "Functional barangay justice system",
          status: "compliant",
        },
      ],
    },
  ]);

  const [activeSection, setActiveSection] = useState<string>("financial");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selfAssessments, setSelfAssessments] = useState<Record<string, boolean>>({
    "financial-1": true, // Default to Yes for the first item to show the file upload
  });
  const [explanations, setExplanations] = useState<Record<string, string>>({});
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File[]>>({
    "financial-1": [
      new File([""], "EO_BADAC_2023.pdf", { type: "application/pdf" })
    ]
  });

  // Check if all assessment items are compliant
  const isAllCompliant = assessmentSections.every((section) =>
    section.items.every((item) => item.status === "compliant")
  );

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleSelfAssessmentChange = (itemId: string, value: boolean) => {
    setSelfAssessments(prev => ({
      ...prev,
      [itemId]: value
    }));
  };

  const handleExplanationChange = (itemId: string, value: string) => {
    setExplanations(prev => ({
      ...prev,
      [itemId]: value
    }));
  };

  const handleFileUpload = (itemId: string, files: FileList) => {
    const newFiles = Array.from(files);
    setUploadedFiles(prev => ({
      ...prev,
      [itemId]: [...(prev[itemId] || []), ...newFiles]
    }));
  };

  const handleFileRemove = (itemId: string, fileIndex: number) => {
    setUploadedFiles(prev => ({
      ...prev,
      [itemId]: prev[itemId]?.filter((_, index) => index !== fileIndex) || []
    }));
  };

  const getSelectedItemData = () => {
    if (!selectedItem) return null;
    
    for (const section of assessmentSections) {
      const item = section.items.find(i => i.id === selectedItem);
      if (item) return item;
    }
    return null;
  };

  const currentSection = assessmentSections.find(section => section.id === activeSection);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            SGLGB Self-Evaluation Document (SED)
          </h2>
          <p className="text-gray-600 mt-1">
            Complete your assessment across all required categories
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <SectionTabs
        sections={assessmentSections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Assessment Items */}
      {activeSection === "bbi" ? (
        <BbiTable items={currentSection?.items || []} />
      ) : (
        <div className="space-y-4">
          {currentSection?.items.map((item) => (
            <AssessmentItemCard
              key={item.id}
              item={item}
              onClick={handleItemClick}
            />
          ))}
        </div>
      )}

      {/* Assessment Modal */}
      <AssessmentModal
        selectedItem={getSelectedItemData()}
        selfAssessment={selectedItem ? selfAssessments[selectedItem] : undefined}
        explanation={selectedItem ? explanations[selectedItem] || "" : ""}
        uploadedFiles={selectedItem ? uploadedFiles[selectedItem] || [] : []}
        onClose={handleCloseModal}
        onSelfAssessmentChange={(value) => selectedItem && handleSelfAssessmentChange(selectedItem, value)}
        onExplanationChange={(value) => selectedItem && handleExplanationChange(selectedItem, value)}
        onFileUpload={handleFileUpload}
        onFileRemove={handleFileRemove}
      />

      {/* Submit Button */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="mr-4 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Save Draft
          </Button>
          <Button
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isAllCompliant}
          >
            Submit for Review
          </Button>
        </div>
      </div>
    </div>
  );
};
