import { ResumeForm } from "@/components/custom/resume-form";
import ResumeTemplate from "@/components/custom/templates";
export default function Home() {

  return (
    
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3  h-screen overflow-y-auto p-4 border border-gray-300 rounded-lg">
          <ResumeForm />
          
        </div>
        <div className="md:w-2/3 h-screen overflow-y-auto p-4 border border-gray-300 rounded-lg">
          <ResumeTemplate template="template3" />
        </div>
        
      </div>
    
  )
}
