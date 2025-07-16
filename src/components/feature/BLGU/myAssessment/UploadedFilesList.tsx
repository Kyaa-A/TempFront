import React from "react";
import { FileText, Trash2 } from "lucide-react";

interface UploadedFilesListProps {
  files: File[];
  itemId: string;
  onFileRemove: (itemId: string, fileIndex: number) => void;
}

export const UploadedFilesList: React.FC<UploadedFilesListProps> = ({
  files,
  itemId,
  onFileRemove,
}) => {
  if (!files || files.length === 0) return null;

  return (
    <div className="mb-6">
      <h4 className="font-semibold text-gray-900 mb-3">Uploaded Files:</h4>
      <div className="space-y-2">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-sm text-gray-900">{file.name}</span>
            </div>
            <button
              onClick={() => onFileRemove(itemId, index)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}; 