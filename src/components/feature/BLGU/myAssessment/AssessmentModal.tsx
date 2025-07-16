import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AssessmentItem } from "./assessmentTypes";
import { getStatusColor, getStatusIcon, getStatusLabel } from "./assessmentUtils";
import { FileUploadArea } from "./FileUploadArea";
import { UploadedFilesList } from "./UploadedFilesList";

interface AssessmentModalProps {
  selectedItem: AssessmentItem | null;
  selfAssessment: boolean | undefined;
  explanation: string;
  uploadedFiles: File[];
  onClose: () => void;
  onSelfAssessmentChange: (value: boolean) => void;
  onExplanationChange: (value: string) => void;
  onFileUpload: (itemId: string, files: FileList) => void;
  onFileRemove: (itemId: string, fileIndex: number) => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  selectedItem,
  selfAssessment,
  explanation,
  uploadedFiles,
  onClose,
  onSelfAssessmentChange,
  onExplanationChange,
  onFileUpload,
  onFileRemove,
}) => {
  if (!selectedItem) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <Card 
        className="p-6 bg-white border-2 border-red-200 shadow-2xl max-w-3xl w-full max-h-[75vh] overflow-y-auto z-[100]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {selectedItem.title}
            </h3>
            <div className="flex items-center mt-2">
              <div
                className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  selectedItem.status
                )}`}
              >
                {getStatusIcon(selectedItem.status)}
                <span className="ml-2">
                  {getStatusLabel(selectedItem.status)}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Indicator Requirement */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Indicator Requirement</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 text-sm leading-relaxed">
              {selectedItem.description}
            </p>
          </div>
        </div>

        {/* BLGU Self-Assessment */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">BLGU Self-Assessment</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name={`assessment-${selectedItem.id}`}
                checked={selfAssessment === true}
                onChange={() => onSelfAssessmentChange(true)}
                className="mr-2 text-blue-600"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name={`assessment-${selectedItem.id}`}
                checked={selfAssessment === false}
                onChange={() => onSelfAssessmentChange(false)}
                className="mr-2 text-blue-600"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Conditional Content Based on Yes/No Selection */}
        {selfAssessment === true && (
          <>
            <FileUploadArea
              itemId={selectedItem.id}
              onFileUpload={onFileUpload}
            />
            <UploadedFilesList
              files={uploadedFiles}
              itemId={selectedItem.id}
              onFileRemove={onFileRemove}
            />
          </>
        )}

        {selfAssessment === false && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              Please explain why this indicator is not met:
            </h4>
            <textarea
              value={explanation}
              onChange={(e) => onExplanationChange(e.target.value)}
              placeholder="Provide detailed explanation..."
              className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}

        {/* Modal Actions */}
        <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
            onClick={onClose}
          >
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
}; 