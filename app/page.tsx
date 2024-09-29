import Image from "next/image";
import { ResumeForm } from "@/components/custom/resume-form";
export default function Home() {
  return (
    
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-1/3  h-screen overflow-y-auto">
          <ResumeForm />
        </div>
        
      </div>
    
  )
}
