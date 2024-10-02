
type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
    address: string;
    links: string[];
    summary: string;
}

type Experience = {
    id: number;
    details: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;  
    responsibilities: string[];
    location: string;
}

type Education = {
    id: number
    details: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;   
    startDate: string;
    endDate: string;
    location: string;
}

type Project = {
    id: number;
    name: string;
    description: string;
    link: string;
}


type Certification = {
    id: number
    link: string;
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
    projects: Project[];
    certifications: Certification[];
    // languages: string[];
    // hobbies: string[];
}

type Skill = {
    id: number;
    name: string;
}

export type { PersonalInfo, Experience, Education, Project, Certification, Resume, Skill, Technology}