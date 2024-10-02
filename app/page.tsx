import { ResumeForm } from "@/components/custom/resume-form";
import { Resume } from "@/Types/types";
import ResumeTemplate from "@/components/custom/templates";
export default function Home() {

  // const resumeData:Resume = {
  //   personalInfo: {
  //     name: "John Doe",
  //     email: "Johndoe@example.com",
  //     phone: "",
  //     address: "",
  //     links: []
  //   },
  //   experience: [],
  //   education: [],
  //   skills: [],
  //   projects: [],
  //   certifications: [],
  //   languages: [],
  //   hobbies: []
  // }

  const sampleResume: Resume = {

    summary: "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs.",
    personalInfo: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: "123 Main Street, Springfield, USA",
      links: ["https://github.com/johndoe", "https://linkedin.com/in/johndoe"]
    },
    experience: [
      {
        company: "Tech Corp",
        position: "Software Engineer",
        startDate: "January 2020",
        endDate: "Present",
        responsibilities: [
          "Developed new features for the company's web application.",
          "Optimized the application for performance and scalability.",
          "Collaborated with the design team to improve the user experience."
        ],      
        location: "San Francisco, CA"
      },
      {
        company: "Web Solutions",
        position: "Junior Developer",
        startDate: "June 2018",
        endDate: "December 2019",
        responsibilities: [
          "Assisted the development team in building new features for client websites.",
          "Maintained and updated existing websites.",
          "Participated in code reviews and testing."
        ],        
        location: "New York, NY"
      }
    ],
    education: [
      {
        institution: "Springfield University",
        degree: "Bachelor of Science in Computer Science",
        startDate: "September 2014",
        endDate: "June 2018",
        fieldOfStudy: "Computer Science",
        location: "Springfield, USA"
      }
    ],
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    projects: [
      {
        name: "Portfolio Website",
        description: "A personal portfolio website showcasing my projects and blog.",
        link: "https://johndoe.com"
      },
      {
        name: "Task Manager App",
        description: "A full-stack web application for managing daily tasks.",
        link: "https://github.com/johndoe/task-manager"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "March 2021",        
      }
    ],
    languages: ["English", "Spanish"],
    hobbies: ["Photography", "Traveling"]
  }

 
  return (
    
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3  h-screen overflow-y-auto p-4 border border-gray-300 rounded-lg">
          <ResumeForm />
          
        </div>
        <div className="md:w-2/3 h-screen overflow-y-auto p-4 border border-gray-300 rounded-lg">
          <ResumeTemplate resume={sampleResume} template="template3" />
        </div>
        
      </div>
    
  )
}
