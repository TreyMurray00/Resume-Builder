"use client"

import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Trash2, Plus } from "lucide-react"
import useLocalStorage from "@/Hooks/LocalStorageHook"
import { Education, Experience, Skill, PersonalInfo, Project, Certification, Technology } from "@/Types/types"

export function ResumeForm() {
  const [openSections, setOpenSections] = useState({
    personalInfo: true,
    education: false,
    experience: false,
    skills: false,
    projects: false,
    certifications: false,
  })

  const [experienceRecords, setExperienceRecords] = useLocalStorage<Experience[]>('experienceRecords', []);
  const [skills, setSkills] = useLocalStorage<Skill[]>('skills', []);
  const [educationRecords, setEducationRecords] = useLocalStorage<Education[]>('educationRecords', []);
  const [projects, setProjects] = useLocalStorage<Project[]>('projects', []);
  const [certifications, setCertifications] = useLocalStorage<Certification[]>('certifications', []);
  const [personalInfo, setPersonalInfo] = useLocalStorage<PersonalInfo>('personalInfo', { 
    name: "", 
    email: "", 
    phone: "", 
    address: "", 
    links: [],
    summary: ""
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
    setPersonalInfo((prev: PersonalInfo) => ({ ...prev, [field]: value }))
  }

  const addLink = () => {
    setPersonalInfo((prev: PersonalInfo) => ({ ...prev, links: [...prev.links, ""] }))
  }

  const updateLink = (index: number, value: string) => {
    setPersonalInfo((prev: PersonalInfo) => ({
      ...prev,
      links: prev.links.map((link, i) => i === index ? value : link)
    }))
  }

  const removeLink = (index: number) => {
    setPersonalInfo((prev: PersonalInfo) => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index)
    }))
  }

  const addEducationRecord = () => {
    setEducationRecords((prev: Education[]) => [
      ...prev,
      { id: Date.now(), institution: "", degree: "", details: "", start: "", end: "" }
    ])
  }

  const deleteEducationRecord = (id: number) => {
    setEducationRecords((prev: Education[]) => prev.filter(record => record.id !== id))
  }

  const updateEducationRecord = (id: number, field: keyof Education, value: string) => {
    setEducationRecords((prev: Education[]) =>
      prev.map(record =>
        record.id === id ? { ...record, [field]: value } : record
      )
    )
  }

  const addExperienceRecord = () => {
    setExperienceRecords((prev: Experience[]) => [
      ...prev,
      { id: Date.now(), company: "", position: "", details: "", startDate: "", endDate: "", start: "", end: "" }
    ])
  }

  const deleteExperienceRecord = (id: number) => {
    setExperienceRecords((prev: Experience[]) => prev.filter(record => record.id !== id))
  }

  const updateExperienceRecord = (id: number, field: keyof Experience, value: string) => {
    setExperienceRecords((prev: Experience[]) =>
      prev.map(record =>
        record.id === id ? { ...record, [field]: value } : record
      )
    )
  }

  const addSkill = () => {
    setSkills((prev: Skill[]) => [...prev, { id: Date.now(), name: "" }])
  }

  const deleteSkill = (id: number) => {
    setSkills((prev: Skill[]) => prev.filter(skill => skill.id !== id))
  }

  const updateSkill = (id: number, name: string) => {
    setSkills((prev: Skill[]) =>
      prev.map(skill =>
        skill.id === id ? { ...skill, name } : skill
      )
    )
  }

  const addProject = () => {
    setProjects((prev: Project[]) => [
      ...prev,
      { id: Date.now(), name: "", description: "", technologies: [], link: "" }
    ])
  }

  const deleteProject = (id: number) => {
    setProjects((prev: Project[]) => prev.filter(project => project.id !== id))
  }

  const updateProject = (id: number, field: keyof Project, value: string) => {
    setProjects((prev: Project[]) =>
      prev.map(project =>
        project.id === id ? { ...project, [field]: value } : project
      )
    )
  }

  const addCertification = () => {
    setCertifications((prev: Certification[]) => [
      ...prev,
      { id: Date.now(), name: "", issuer: "", date: "", link: "" }
    ])
  }

  const deleteCertification = (id: number) => {
    setCertifications((prev: Certification[]) => prev.filter(cert => cert.id !== id))
  }

  const updateCertification = (id: number, field: keyof Certification, value: string) => {
    setCertifications((prev: Certification[]) =>
      prev.map(cert =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    )
  }

  return (
    <div className="space-y-4 overflow-y-auto">
      <Collapsible open={openSections.personalInfo} onOpenChange={() => toggleSection('personalInfo')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded border border-black">
          <span>Personal Information</span>
          {openSections.personalInfo ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 space-y-2 ">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            className="border-black"
            value={personalInfo.name}
            onChange={(e) => updatePersonalInfo('name', e.target.value)}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            className="border-black"
            value={personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
          />
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            className="border-black"
            value={personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
          />
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            className="border-black"
            value={personalInfo.address}
            onChange={(e) => updatePersonalInfo('address', e.target.value)}
          />
          <Label htmlFor="professionalSummary">Professional Summary</Label>
          <Textarea
            id="professionalSummary"
            className="border-black"
            value={personalInfo.summary}
            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
            placeholder="Briefly describe your professional background and key skills"
          />
          <Label>Links</Label>
          {personalInfo.links.map((link: string, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                className="border-black flex-grow"
                value={link}
                onChange={(e) => updateLink(index, e.target.value)}
                placeholder="https://"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeLink(index)}
                className="border-black"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove link</span>
              </Button>
            </div>
          ))}
          <Button onClick={addLink} className="w-full border-black">
            <Plus className="h-4 w-4 mr-2" />
            Add Link
          </Button>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openSections.education} onOpenChange={() => toggleSection('education')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded border border-black">
          <span>Education</span>
          {openSections.education ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 space-y-4">
          {educationRecords.map((record) => (
            <div key={record.id} className="space-y-2 p-2 rounded relative">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-0 m-0 right-2  border-black"
                onClick={() => deleteEducationRecord(record.id)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete education record</span>
              </Button>
              <Label htmlFor={`school-${record.id}`}>School</Label>
              <Input
                id={`school-${record.id}`}
                className="border-black"
                value={record.institution}
                onChange={(e) => updateEducationRecord(record.id, 'institution', e.target.value)}
              />
              <Label htmlFor={`degree-${record.id}`}>Degree</Label>
              <Input
                id={`degree-${record.id}`}
                className="border-black"
                value={record.degree}
                onChange={(e) => updateEducationRecord(record.id, 'degree', e.target.value)}
              />
              <Label htmlFor={`educationDetails-${record.id}`}>Details</Label>
              <Textarea
                id={`educationDetails-${record.id}`}
                className="border-black"
                placeholder="Add any relevant details about your education"
                value={record.details}
                onChange={(e) => updateEducationRecord(record.id, 'details', e.target.value)}
              />
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Label htmlFor={`startYear-${record.id}`}>Start Year</Label>
                  <Input
                    id={`startYear-${record.id}`}
                    type="number"
                    className="border-black"
                    placeholder="YYYY"
                    value={record.start}
                    onChange={(e) => updateEducationRecord(record.id, 'start', e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor={`endYear-${record.id}`}>End Year</Label>
                  <Input
                    id={`endYear-${record.id}`}
                    type="number"
                    className="border-black"
                    placeholder="YYYY"
                    value={record.end}
                    onChange={(e) => updateEducationRecord(record.id, 'end', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
          <Button onClick={addEducationRecord} className="w-full border-black">
            Add Education
          </Button>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openSections.experience} onOpenChange={() => toggleSection('experience')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded border border-black">
          <span>Experience</span>
          {openSections.experience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 space-y-4">
          {experienceRecords.map((record) => (
            <div key={record.id} className="space-y-2 p-2 rounded  relative">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-0 m-0 right-2 border-black"
                onClick={() => deleteExperienceRecord(record.id)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete experience record</span>
              </Button>
              <Label htmlFor={`company-${record.id}`}>Company</Label>
              <Input
                id={`company-${record.id}`}
                className="border-black"
                value={record.company}
                onChange={(e) => updateExperienceRecord(record.id, 'company', e.target.value)}
              />
              <Label htmlFor={`position-${record.id}`}>Position</Label>
              <Input
                id={`position-${record.id}`}
                className="border-black"
                value={record.position}
                onChange={(e) => updateExperienceRecord(record.id, 'position', e.target.value)}
              />
              <Label htmlFor={`experienceDetails-${record.id}`}>Details</Label>
              <Textarea
                id={`experienceDetails-${record.id}`}
                className="border-black"
                placeholder="Add any relevant details about your experience"
                value={record.details}
                onChange={(e) => updateExperienceRecord(record.id, 'details', e.target.value)}
              />
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Label htmlFor={`startDate-${record.id}`}>Start Date</Label>
                  <Input
                    id={`startDate-${record.id}`}
                    type="date"
                    className="border-black"
                    value={record.start}
                    onChange={(e) => updateExperienceRecord(record.id, 'start', e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor={`endDate-${record.id}`}>End Date</Label>
                  <Input
                    id={`endDate-${record.id}`}
                    type="date"
                    className="border-black"
                    value={record.end}
                    onChange={(e) => updateExperienceRecord(record.id, 'end', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
          <Button onClick={addExperienceRecord} className="w-full border-black">
            Add Experience
          </Button>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openSections.skills} onOpenChange={() => toggleSection('skills')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded border border-black">
          <span>Skills</span>
          {openSections.skills ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 space-y-2 ">
          {skills.map((skill: Skill) => (
            <div key={skill.id} className="flex items-center space-x-2">
              <Input
                className="border-black flex-grow"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, e.target.value)}
                placeholder="Enter a skill"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => deleteSkill(skill.id)}
                className="border-black"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete skill</span>
              </Button>
            </div>
          ))}
          <Button onClick={addSkill} className="w-full border-black">
            <Plus className="h-4 w-4 mr-2" />
            Add Skill
          </Button>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openSections.projects} onOpenChange={() => toggleSection('projects')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded border border-black">
          <span>Projects</span>
          {openSections.projects ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="space-y-2 p-2 rounded relative">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-0 m-0 right-2 border-black"
                onClick={() => deleteProject(project.id)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete project</span>
              </Button>
              <Label htmlFor={`projectName-${project.id}`}>Project Name</Label>
              <Input
                id={`projectName-${project.id}`}
                className="border-black"
                value={project.name}
                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
              />
              <Label htmlFor={`projectDescription-${project.id}`}>Description</Label>
              <Textarea
                id={`projectDescription-${project.id}`}
                className="border-black"
                placeholder="Describe your project"
                value={project.description}
                onChange={(e) => updateProject(project.id, 'description', e.target.value)}
              />
              <Label htmlFor={`projectTechnologies-${project.id}`}>Technologies Used</Label>
              <Input
                id={`projectTechnologies-${project.id}`}
                className="border-black"
                value={project.technologies.join(", ")}
                onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                placeholder="e.g., React, Node.js, MongoDB"
              />
              <Label htmlFor={`projectLink-${project.id}`}>Project Link</Label>
              <Input
                id={`projectLink-${project.id}`}
                className="border-black"
                value={project.link}
                onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                placeholder="https://"
              />
            </div>
          ))}
          <Button onClick={addProject} className="w-full border-black">
            Add Project
          </Button>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openSections.certifications} onOpenChange={() => toggleSection('certifications')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded border border-black">
          <span>Certifications</span>
          {openSections.certifications ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 space-y-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="space-y-2 p-2 rounded relative">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-0 m-0 right-2 border-black"
                onClick={() => deleteCertification(cert.id)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete certification</span>
              </Button>
              <Label htmlFor={`certName-${cert.id}`}>Certification Name</Label>
              <Input
                id={`certName-${cert.id}`}
                className="border-black"
                value={cert.name}
                onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
              />
              <Label htmlFor={`certIssuer-${cert.id}`}>Issuing Organization</Label>
              <Input
                id={`certIssuer-${cert.id}`}
                className="border-black"
                value={cert.issuer}
                onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
              />
              <Label htmlFor={`certDate-${cert.id}`}>Date Obtained</Label>
              <Input
                id={`certDate-${cert.id}`}
                type="date"
                className="border-black"
                value={cert.date}
                onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
              />
              <Label htmlFor={`certLink-${cert.id}`}>Certification Link</Label>
              <Input
                id={`certLink-${cert.id}`}
                className="border-black"
                value={cert.link}
                onChange={(e) => updateCertification(cert.id, 'link', e.target.value)}
                placeholder="https://"
              />
            </div>
          ))}
          <Button onClick={addCertification} className="w-full border-black">
            Add Certification
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}