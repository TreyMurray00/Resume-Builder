
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
    start: string;
    end: string;
}

type Education = {
    institution: string;
    degree: string;
    start: string;
    end: string;
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