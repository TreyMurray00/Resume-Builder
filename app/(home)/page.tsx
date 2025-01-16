"use client"
import { ResumeForm } from "@/components/custom/resume-form";
import ResumeTemplate from "@/components/custom/templates";
import Template1 from "@/components/custom/Resume Templates/Template1";

export default function Home() {


  return (
    
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3  h-screen overflow-y-auto p-4 border border-gray-300 rounded-lg">
  
          <ResumeForm />
          
        </div>

          {/* <PDFViewer className="md:w-2/3 h-screen w-full overflow-y-auto p-4  border border-gray-300 rounded-lg">
            <MyDocument></MyDocument>
          </PDFViewer> */}
          <div className="md:w-2/3 h-screen w-full overflow-y-auto p-4  border border-gray-300 rounded-lg">
            <Template1 className="rounded-lg shadow-lg p-8" />
              {/* <ResumeTemplate  template="template3" /> */}
          </div>
         
        
        
      </div>
    
  )
}

