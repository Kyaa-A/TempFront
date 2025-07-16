import React from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadAreaProps {
  itemId: string;
  onFileUpload: (itemId: string, files: FileList) => void;
}

export const FileUploadArea: React.FC<FileUploadAreaProps> = ({
  itemId,
  onFileUpload,
}) => {
  return (
    <div className="mb-6">
      <h4 className="font-semibold text-gray-900 mb-3">Means of Verification (MOVs)</h4>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-4">Drag and drop files here, or click to browse</p>
        <input
          type="file"
          multiple
          onChange={(e) => e.target.files && onFileUpload(itemId, e.target.files)}
          className="hidden"
          id={`file-upload-${itemId}`}
        />
        <label
          htmlFor={`file-upload-${itemId}`}
          className="cursor-pointer"
        >
          <Button variant="outline" className="pointer-events-none">
            Choose Files
          </Button>
        </label>
      </div>
    </div>
  );
}; 