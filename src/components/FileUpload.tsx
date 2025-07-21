import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { uploadFile } from '@/lib/uploadthing';

interface FileUploadProps {
  className?: string;
  buttonText?: string;
  showDropzone?: boolean;
}

const FileUpload = ({ className = "", buttonText = "Upload Your Deck", showDropzone = true }: FileUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    
    try {
      const result = await uploadFile(file);
      toast({
        title: "Upload successful!",
        description: `${file.name} has been uploaded successfully.`,
      });
      console.log('Upload result:', result);
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive",
      });
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  if (showDropzone) {
    return (
      <div 
        className={`upload-zone-glow max-w-2xl mx-auto mb-8 p-8 border-2 border-dashed border-primary/30 rounded-lg hover:border-primary/50 transition-colors ${className}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Upload className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h3 className="text-2xl font-semibold mb-2">Drop your deck here</h3>
        <p className="text-muted-foreground mb-6">Drag and drop your presentation or click to browse</p>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".ppt,.pptx,.pdf"
          onChange={handleFileSelect}
          disabled={isUploading}
        />
        <label htmlFor="file-upload">
          <Button className="btn-glow" disabled={isUploading}>
            {isUploading ? "Uploading..." : buttonText}
          </Button>
        </label>
      </div>
    );
  }

  return (
    <>
      <input
        type="file"
        id="file-upload-button"
        className="hidden"
        accept=".ppt,.pptx,.pdf"
        onChange={handleFileSelect}
        disabled={isUploading}
      />
      <label htmlFor="file-upload-button">
        <Button className={`btn-glow ${className}`} disabled={isUploading}>
          {isUploading ? "Uploading..." : buttonText}
        </Button>
      </label>
    </>
  );
};

export default FileUpload;