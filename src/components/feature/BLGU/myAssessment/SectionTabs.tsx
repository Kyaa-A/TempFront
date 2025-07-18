import React, { useState } from "react";
import { AssessmentSection } from "./assessmentTypes";
import Image from "next/image";

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
  const [clickedTab, setClickedTab] = useState<string | null>(null);

  // Split sections into two groups
  const firstGroup = sections.slice(0, 3); // Financial, Disaster, Safety
  const secondGroup = sections.slice(3); // Environmental, Social, Business

  // Function to get logo path for each section
  const getSectionLogo = (sectionId: string) => {
    const logoMap: Record<string, string> = {
      financial: "/assessmentCriteria/financialAdmin.png",
      disaster: "/assessmentCriteria/disasterPreparedness.png",
      safety: "/assessmentCriteria/safetyPeaceAndOrder.png",
      environmental: "/assessmentCriteria/environmentalManagement.png",
      social: "/assessmentCriteria/socialProtectAndSensitivity.png",
      business: "/assessmentCriteria/businessFriendliness.png",
    };
    return logoMap[sectionId] || "/assessmentCriteria/financialAdmin.png";
  };

  // Function to split section titles into multiple lines
  const formatSectionTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length === 1) {
      return [title];
    }
    // For two words, put each on a separate line
    if (words.length === 2) {
      return words;
    }
    // For more than two words, try to split evenly
    const midPoint = Math.ceil(words.length / 2);
    return [
      words.slice(0, midPoint).join(" "),
      words.slice(midPoint).join(" "),
    ];
  };

  const handleSectionClick = (sectionId: string) => {
    setClickedTab(sectionId);
    onSectionChange(sectionId);
    
    // Reset click animation after a short delay
    setTimeout(() => {
      setClickedTab(null);
    }, 200);
  };

  const renderTabGroup = (
    groupSections: AssessmentSection[],
    groupIndex: number
  ) => {
    const isFirstGroup = groupIndex === 0;
    const groupBaseColor = isFirstGroup ? "blue" : "green";

    return (
      <div
        className={`flex space-x-4 ${
          isFirstGroup ? "bg-blue-50/30" : "bg-green-50/30"
        } px-4 py-2 rounded-lg`}
      >
        {groupSections.map((section) => {
          const titleLines = formatSectionTitle(section.title);
          const isActive = activeSection === section.id;
          const isClicked = clickedTab === section.id;

          return (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`min-w-[120px] py-3 px-3 border-b-2 font-medium text-sm transition-all duration-200 rounded-t-lg text-center transform-gpu
                ${isActive || isClicked ? 'scale-105 shadow-lg -translate-y-1' : 'scale-100 hover:scale-102'}
                ${isActive
                  ? isFirstGroup
                    ? "border-blue-500 text-blue-600 bg-blue-50 shadow-blue-200/50"
                    : "border-green-500 text-green-600 bg-green-50 shadow-green-200/50"
                  : isFirstGroup
                  ? "border-transparent text-gray-600 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md"
                  : "border-transparent text-gray-600 hover:text-green-700 hover:border-green-300 hover:bg-green-50/50 hover:shadow-md"
                }
                ${isClicked ? 'animate-pulse' : ''}
              `}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-2">
                {/* Logo */}
                <div className={`w-12 h-12 relative transition-transform duration-200 ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}>
                  <Image
                    src={getSectionLogo(section.id)}
                    alt={`${section.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Title */}
                <div className="flex flex-col items-center">
                  {titleLines.map((line, index) => (
                    <span key={index} className="block leading-tight text-xs">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="border-b border-gray-200">
      <nav className="flex items-center justify-center space-x-8 pb-2">
        {/* First Group - Core Governance */}
        <div className="flex flex-col">
          <div className="text-xs font-medium text-gray-500 mb-2 px-4 text-center">
            Core Governance Areas
          </div>
          {renderTabGroup(firstGroup, 0)}
        </div>

        {/* Visual Separator */}
        <div className="flex flex-col items-center py-4">
          <div className="w-px h-20 bg-gray-300"></div>
        </div>

        {/* Second Group - Development Areas */}
        <div className="flex flex-col">
          <div className="text-xs font-medium text-gray-500 mb-2 px-4 text-center">
            Development Areas
          </div>
          {renderTabGroup(secondGroup, 1)}
        </div>
      </nav>
    </div>
  );
};
