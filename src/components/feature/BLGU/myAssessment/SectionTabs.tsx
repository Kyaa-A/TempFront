import React from "react";
import { AssessmentSection } from "./assessmentTypes";

interface SectionTabsProps {
  sections: AssessmentSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const SectionTabs: React.FC<SectionTabsProps> = ({
  sections,
  activeSection,
  onSectionChange,
}) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8 overflow-x-auto">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeSection === section.id
                ? "border-red-500 text-red-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}; 