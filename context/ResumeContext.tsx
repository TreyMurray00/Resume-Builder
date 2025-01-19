"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { PersonalInfo, Project, Education, Skill, Experience, Certification } from '@/Types/types'
import useLocalStorage from '@/Hooks/LocalStorageHook'

interface ResumeContextType {
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  experienceRecords: Experience[];
  setExperienceRecords: React.Dispatch<React.SetStateAction<Experience[]>>;
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
  educationRecords: Education[];
  setEducationRecords: React.Dispatch<React.SetStateAction<Education[]>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  certifications: Certification[];
  setCertifications: React.Dispatch<React.SetStateAction<Certification[]>>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [personalInfo, setPersonalInfo] = useLocalStorage<PersonalInfo>('personalInfo', {
    name: "",
    email: "",
    phone: "",
    address: "",
    links: [],
    summary: ""
  })

  const [experienceRecords, setExperienceRecords] = useLocalStorage<Experience[]>('experienceRecords', [])
  const [skills, setSkills] = useLocalStorage<Skill[]>('skills', [])
  const [educationRecords, setEducationRecords] = useLocalStorage<Education[]>('educationRecords', [])
  const [projects, setProjects] = useLocalStorage<Project[]>('projects', [])
  const [certifications, setCertifications] = useLocalStorage<Certification[]>('certifications', [])

  const value = {
    personalInfo,
    setPersonalInfo,
    experienceRecords,
    setExperienceRecords,
    skills,
    setSkills,
    educationRecords,
    setEducationRecords,
    projects,
    setProjects,
    certifications,
    setCertifications
  }

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider')
  }
  return context
}