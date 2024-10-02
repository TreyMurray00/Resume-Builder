
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
    start: string;
    end: string;
}

type Education = {
    id: number
    details: string;
    institution: string;
    degree: string;
    start: string;
    end: string;
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