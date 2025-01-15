"use client";
import React, { useEffect } from 'react';
import useLocalStorage from '@/Hooks/LocalStorageHook';
import { Education, Experience, Skill, PersonalInfo, Project, Certification } from "@/Types/types";
import DownloadButton from '@/components/custom/download-button';


type ResumeTemplateProps = {  
  template: 'template1' | 'template2' | 'template3';
};

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ template }) => {

  const [personalInfo] = useLocalStorage<PersonalInfo>('personalInfo', { 
    name: "", 
    email: "", 
    phone: "", 
    address: "", 
    links: [],
    summary: ""
  });
  
  const [experienceRecords] = useLocalStorage<Experience[]>('experienceRecords', []);
  const [skills] = useLocalStorage<Skill[]>('skills', []);
  const [educationRecords] = useLocalStorage<Education[]>('educationRecords', []);
  const [projects] = useLocalStorage<Project[]>('projects', []);
  const [certifications] = useLocalStorage<Certification[]>('certifications', []);

  const Template1 = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto relative">
      <h1 className="text-3xl font-bold text-center text-blue-800">{personalInfo.name}</h1>
      <p className="text-center text-sm mb-4">
        {personalInfo.email} | {personalInfo.phone} | {personalInfo.address}
      </p>
      <hr className="border-blue-800 mb-4" />
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">PROFESSIONAL SUMMARY</h2>
        <p>{personalInfo.summary}</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">WORK HISTORY</h2>
        {experienceRecords.map((job, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{job.position} | {job.company} | {job.startDate} - {job.endDate}</p>
            <p>{job.details}</p>
          </div>
        ))}
      </section>
  
      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">PROJECTS</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{project.name}</p>
            <p>{project.description}</p>
            {project.link && <a href={project.link} className="text-blue-800 underline">{project.link}</a>}
          </div>
        ))}
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">SKILLS</h2>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">EDUCATION</h2>
        {educationRecords.map((edu, index) => (
          <p key={index}>
            {edu.institution}<br />
            {edu.degree}: {edu.start} - {edu.end}
          </p>
        ))}
      </section>
      
      <section>
        <h2 className="text-xl font-bold text-blue-800 mb-2">CERTIFICATIONS</h2>
        <ul className="list-disc list-inside">
          {certifications.map((cert, index) => (
            <li key={index}>{cert.name} - {cert.issuer}, {cert.date}</li>
          ))}
        </ul>
      </section>
    </div>
  );

  const Template2 = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-500 mb-2">{personalInfo.name}</h1>
      <p className="text-sm mb-4">{personalInfo.phone} | {personalInfo.email} | {personalInfo.address}</p>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-orange-500 mb-2">PROFESSIONAL SUMMARY</h2>
        <p>{personalInfo.summary}</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-orange-500 mb-2">WORK HISTORY</h2>
        {experienceRecords.map((job, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{job.position}, {job.company}, {job.startDate}-{job.endDate}</p>
            <p>{job.details}</p>
          </div>
        ))}
      </section>
  
      <section className="mb-4">
        <h2 className="text-xl font-bold text-orange-500 mb-2">PROJECTS</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{project.name}</p>
            <p>{project.description}</p>
            {project.link && <a href={project.link} className="text-orange-500 underline">{project.link}</a>}
          </div>
        ))}
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-orange-500 mb-2">SKILLS</h2>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-orange-500 mb-2">EDUCATION</h2>
        {educationRecords.map((edu, index) => (
          <p key={index}>
            {edu.institution}<br />
            {edu.degree}, {edu.start}, {edu.end}
          </p>
        ))}
      </section>
      
      <section>
        <h2 className="text-xl font-bold text-orange-500 mb-2">CERTIFICATIONS</h2>
        <ul className="list-disc list-inside">
          {certifications.map((cert, index) => (
            <li key={index}>{cert.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
  

  const Template3 = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-red-600">{personalInfo.name.toUpperCase()}</h1>
        <p className="text-sm">{personalInfo.address} | {personalInfo.phone} | {personalInfo.email}</p>
      </div>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">PROFESSIONAL SUMMARY</h2>
        <p>{personalInfo.summary}</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">WORK HISTORY</h2>
        {experienceRecords.map((job, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{job.position}</p>
            <p>{job.company}</p>
            <p>{job.startDate} to {job.endDate}</p>
            <p>{job.details}</p>
          </div>
        ))}
      </section>
  
      <section className="mb-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">PROJECTS</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{project.name}</p>
            <p>{project.description}</p>
            {project.link && <a href={project.link} className="text-red-600 underline">{project.link}</a>}
          </div>
        ))}
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">SKILLS</h2>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">EDUCATION</h2>
        {educationRecords.map((edu, index) => (
          <p key={index}>
            {edu.institution}<br />
            {edu.degree} — {edu.start} to {edu.end}
          </p>
        ))}
      </section>
      
      <section>
        <h2 className="text-xl font-bold text-red-600 mb-2">CERTIFICATIONS</h2>
        <ul className="list-disc list-inside">
          {certifications.map((cert, index) => (
            <li key={index}>{cert.name} - {cert.issuer}</li>
          ))}
        </ul>
      </section>
    </div>
  );
  


  return (
    <div className="relative">
      <div id="resume-container">
        {template === 'template1' && <Template1 />}
        {template === 'template2' && <Template2 />}
        {template === 'template3' && <Template3 />}
      </div>
      <DownloadButton targetId="resume-container" />
    </div>
  );
};

export default ResumeTemplate;
