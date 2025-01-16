"use client"
import React from 'react'
import { PersonalInfo, Project,Education,Skill, Experience, Certification } from '@/Types/types'
import useLocalStorage from '@/Hooks/LocalStorageHook';
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {

  className ?: string

}


const Template1 = ({className}: Props) => {
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
  return (
   
    <div className="min-h-screen flex items-center justify-center">

      <div className={cn("bg-white max-w-4xl w-full ",className)}>
        <section className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{personalInfo.name}</h1>
          <div className="flex items-center justify-center gap-4 mt-2 text-gray-600 flex-wrap">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <br className='px-2'/>
              <span>{personalInfo.address}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <br className='px-2'/>
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <br className='px-2'/>
              <a href="mailto:first.last@resumeworded.com" className="text-blue-600 hover:underline">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              <br className='px-2'/>
              <a href="https://linkedin.com/in/username" className="text-blue-600 hover:underline">
                {personalInfo.links[0]}
              </a>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2 mb-4">SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">
            {personalInfo.summary}
          </p>
        </section>
        {educationRecords.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2 mb-4">EDUCATION</h2>
            <div className="space-y-4">
              {educationRecords.map((edu, index) => (
                <div key={index}>
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold">{edu.institution}</h3>
                        {/* Add location to edu */}
                        <span className="text-gray-600">Nort Korea, NK</span>
                    </div>
                    <div className="flex justify-between items-start">
                        <p className="italic text-gray-600">{edu.degree}</p>
                        <span className="text-gray-600">{edu.start} – {edu.end}</span>
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        {edu.details.split("\n").map((detail, index) => ( <li key={index}>{detail}</li> ))}
                    </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        

        { experienceRecords.length > 0 && 
            <section className="mb-6">
                <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2 mb-4">EXPERIENCE</h2>
                <div className="space-y-6">
                    <div>

                        {experienceRecords.map((exp, index) => (

                            <div key={index}>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold">{exp.company}</h3>
                                    <span className="text-gray-600">New York, NY</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <p className="italic text-gray-600">{exp.position}</p>
                                    <span className="text-gray-600">{exp.startDate} – {exp.endDate}</span>
                                </div>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                    {exp.details.split("\n").map((detail, index) => ( <li key={index}>{detail}</li> ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        }

        {
            (skills.length > 0 || certifications.length > 0) &&
            <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2 mb-4">SKILLS</h2>
            <div className="space-y-2">
                {skills.length > 0 && <p><span className="font-bold">Technical Skills:</span> {skills.map((skill, index) => (<span key={index}>{skill.name}{index < skills.length - 1 ? ', ' : ''}</span>))}</p>}
                {certifications.length > 0 && <p><span className="font-bold">Certifications & Training:</span> {certifications.map((cert, index) => (<span key={index}>{cert.name}{index < certifications.length - 1 ? ', ' : ''}</span>))}</p>}
            </div>
            </section>
        }
      </div>
    </div>
  )
}

export default Template1