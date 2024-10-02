
type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
    address: string;
    links: string[];
}

type Experience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;  
    responsibilities: string[];
    location: string;
}

type Education = {
    institution: string;
    degree: string;
    fieldOfStudy: string;   
    startDate: string;
    endDate: string;
    location: string;
}

type Projects = {
    name: string;
    description: string;
    link: string;
}

type Certification = {
    name: string;
    issuer: string;
    date: string;  
}

type Resume = {
    summary: string;
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    skills: string[];
    projects: Projects[];
    certifications: Certification[];
    languages: string[];
    hobbies: string[];
}

export type { PersonalInfo, Experience, Education, Projects, Certification, Resume}