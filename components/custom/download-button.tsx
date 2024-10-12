import { Download, LoaderCircle } from 'lucide-react';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

type DownloadButtonProps = {
  targetId: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ targetId }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    setIsDownloading(true);
    const element = document.getElementById(targetId);
    if (element) {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF();
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(data, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    }
    setIsDownloading(false);
  };

  return (
    <button
      onClick={downloadPDF}
      disabled={isDownloading}
      className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded flex items-center"
    >      
      {isDownloading ? <div className="animate-spin"> <LoaderCircle /></div> : <Download/>}
    </button>
  );
};

export default DownloadButton;
