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
    
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3  h-screen overflow-y-auto p-4 border border-gray-300">
          <ResumeForm />
          
        </div>
        <div className="md:w-2/3 h-screen overflow-y-auto p-4 border border-gray-300">
          <PdfView/>
        </div>
        
      </div>
    
  )
}
