"use client"
import { ResumeForm } from "@/components/custom/resume-form/ResumeForm";
import ResumeTemplate from "@/components/custom/templates";
import { ResumeProvider } from '@/context/ResumeContext'
import Template1 from "@/components/custom/Resume Templates/Template1";
import { PrintButton } from '@/components/custom/print-button'

export default function Home() {


  return (
    <ResumeProvider>
    <div className="flew flex-row">
      
        

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3  h-screen overflow-y-auto p-4 border border-gray-300 rounded-lg">
  
          <ResumeForm />
          
        </div>

          <div className="md:w-2/3 h-screen w-full overflow-y-auto p-4  border border-gray-300 rounded-lg">
            <div className="mb-4">
              <PrintButton />
            </div>
            <Template1 className="rounded-lg shadow-lg p-8" />
              {/* <ResumeTemplate  template="template3" /> */}
          </div>
         
        
        
      </div>
    </div>
    </ResumeProvider>
  )
}

