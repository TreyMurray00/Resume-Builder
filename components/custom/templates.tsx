"use client"

import React, { useState } from 'react';
import { Resume } from '../../Types/types';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

type ResumeTemplateProps = {
  resume: Resume;
  template: 'template1' | 'template2' | 'template3';
};

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ resume, template }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    setIsDownloading(true);
    const element = document.getElementById('resume-container');
    if (element) {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF();
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      
      pdf.addImage(data, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    }
    setIsDownloading(false);
  };

  const Template1 = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-800">{resume.personalInfo.name.toUpperCase()}</h1>
      <p className="text-center text-sm mb-4">{resume.personalInfo.email} | {resume.personalInfo.phone} | {resume.personalInfo.address}</p>
      <hr className="border-blue-800 mb-4" />
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">PROFESSIONAL SUMMARY</h2>
        <p>{resume.summary}</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">WORK HISTORY</h2>
        {resume.experience.map((job, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{job.position} | {job.company} - {job.location} | {job.startDate} - {job.endDate}</p>
            <ul className="list-disc list-inside">
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">SKILLS</h2>
        <ul className="list-disc list-inside columns-2">
          {resume.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">EDUCATION</h2>
        {resume.education.map((edu, index) => (
          <p key={index}>
            {edu.institution} | {edu.location}<br />
            {edu.degree}: {edu.fieldOfStudy}
          </p>
        ))}
      </section>
      
      <section>
        <h2 className="text-xl font-bold text-blue-800 mb-2">CERTIFICATIONS</h2>
        <ul className="list-disc list-inside">
          {resume.certifications.map((cert, index) => (
            <li key={index}>{cert.name} - {cert.issuer}, {cert.date}</li>
          ))}
        </ul>
      </section>
    </div>
  );

  const Template2 = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-500 mb-2">{resume.personalInfo.name}</h1>
      <p className="text-sm mb-4">{resume.personalInfo.phone} | {resume.personalInfo.email} | {resume.personalInfo.address}</p>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-orange-500 mb-2">PROFESSIONAL SUMMARY</h2>
        <p>{resume.summary}</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-orange-500 mb-2">WORK HISTORY</h2>
        {resume.experience.map((job, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{job.position}, {job.company}, {job.startDate}-{job.endDate}</p>
            <p className="italic">{job.location}</p>
            <ul className="list-disc list-inside">
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-orange-500 mb-2">SKILLS</h2>
        <ul className="list-disc list-inside columns-2">
          {resume.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-orange-500 mb-2">EDUCATION</h2>
        {resume.education.map((edu, index) => (
          <p key={index}>
            {edu.degree}<br />
            {edu.fieldOfStudy}, {edu.institution}, {edu.endDate}
          </p>
        ))}
      </section>
      
      <section>
        <h2 className="text-xl font-bold text-orange-500 mb-2">CERTIFICATIONS</h2>
        <ul className="list-disc list-inside">
          {resume.certifications.map((cert, index) => (
            <li key={index}>{cert.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );

  const Template3 = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-red-600">{resume.personalInfo.name.toUpperCase()}</h1>
        <p className="text-sm">{resume.personalInfo.address} | {resume.personalInfo.phone} | {resume.personalInfo.email}</p>
      </div>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">PROFESSIONAL SUMMARY</h2>
        <p>{resume.summary}</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">WORK HISTORY</h2>
        {resume.experience.map((job, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{job.position}</p>
            <p>{job.company} — {job.location}</p>
            <p>{job.startDate} to {job.endDate}</p>
            <ul className="list-disc list-inside">
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">SKILLS</h2>
        <ul className="list-disc list-inside columns-2">
          {resume.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">EDUCATION</h2>
        {resume.education.map((edu, index) => (
          <p key={index}>
            {edu.degree}: {edu.fieldOfStudy}<br />
            {edu.institution} — {edu.location}
          </p>
        ))}
      </section>
      
      <section>
        <h2 className="text-xl font-bold text-red-600 mb-2">CERTIFICATIONS</h2>
        <ul className="list-disc list-inside">
          {resume.certifications.map((cert, index) => (
            <li key={index}>{cert.name} - {cert.issuer}</li>
          ))}
        </ul>
      </section>
    </div>
  );

  return (
    <div>
      <div id="resume-container">
        {template === 'template1' && <Template1 />}
        {template === 'template2' && <Template2 />}
        {template === 'template3' && <Template3 />}
      </div>
      <button
        onClick={downloadPDF}
        disabled={isDownloading}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isDownloading ? 'Downloading...' : 'Download PDF'}
      </button>
    </div>
  );
};

export default ResumeTemplate;