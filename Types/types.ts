
type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
    address: string;
    links: string[];
}

type Experience = {
    id: number;
    company: string;
    position: string;
    start: string;
    end: string;
}

type Education = {
    id: number
    institution: string;
    degree: string;
    start: string;
    end: string;
}

type Projects = {
    id: number;
    name: string;
    description: string;
    link: string;
}

type Certification = {
    id: number
    name: string;
    issuer: string;
    date: string;
}

type Resume = {
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    skills: string[];
    projects: Projects[];
    certifications: Certification[];
    languages: string[];
    hobbies: string[];
}

type Skill = {
    id: number;
    name: string;
}

export type { PersonalInfo, Experience, Education, Projects, Certification, Resume, Skill}