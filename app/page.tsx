import Image from "next/image";
import { ResumeForm } from "@/components/custom/resume-form";
import PdfView from "@/components/custom/pdf";
import { Resume } from "@/Types/types";
export default function Home() {

  const resumeData:Resume = {
    personalInfo: {
      name: "John Doe",
      email: "Johndoe@example.com",
      phone: "",
      address: "",
      links: []
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    hobbies: []
  }
  return (
    
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="w-1/3  h-screen overflow-y-auto p-4 m-0 border border-r-black">
          <ResumeForm />
          
        </div>
        <div className="w-2/3 my-4 bg-slate-300 overflow-y-auto">
          <PdfView/>
        </div>
        
      </div>
    
  )
}
