import { PersonalInfo, Experience, Education, Projects, Certification, Resume} from "./types";

class ResumeClass {
    private personalInfo: PersonalInfo;
    private experience: Experience[];
    private education: Education[];
    private skills: string[];
    private projects: Projects[];
    private certifications: Certification[];
    private languages: string[];
    private hobbies: string[];


    constructor() {
        this.personalInfo = {
            name: "",
            email: "",
            phone: "",
            address: "",
            links: []
        };
        this.experience = [];
        this.education = [];
        this.skills = [];
        this.projects = [];
        this.certifications = [];
        this.languages = [];
        this.hobbies = [];
    }


    setPersonalInfo(personalInfo: PersonalInfo) {
        this.personalInfo = personalInfo;
    }

    setExperience(experience: Experience[]) {
        this.experience = experience;
    }

    setEducation(education: Education[]) {
        this.education = education;
    }

    setSkills(skills: string[]) {
        this.skills = skills;
    }

    setProjects(projects: Projects[]) {
        this.projects = projects;
    }

    setCertifications(certifications: Certification[]) {
        this.certifications = certifications;
    }

    getResume(): Resume {
        return {
            personalInfo: this.personalInfo,
            experience: this.experience,
            education: this.education,
            skills: this.skills,
            projects: this.projects,
            certifications: this.certifications,
            languages: this.languages,
            hobbies: this.hobbies
        }   
    }
}

export default ResumeClass;