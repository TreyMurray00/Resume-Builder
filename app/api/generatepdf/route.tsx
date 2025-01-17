import { NextRequest, NextResponse } from "next/server";
import { Certification, Education, Experience, PersonalInfo, Project, Skill } from "@/Types/types";

export async function GET(request: NextRequest) {
  try {
  }
  catch (error) {
    return NextResponse.error();
  }
}

function generatePDF(doc: PDFKit.PDFDocument, resume: {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
}) {
  // Personal Information
  doc.fontSize(18).text('Resume', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text("Hwllo");
  // doc.fontSize(10).text(resume.personalInfo.email);
  // doc.text(resume.personalInfo.phone);
  // doc.text(resume.personalInfo.address);
  doc.moveDown();

  // Experience
  // doc.fontSize(14).text('Experience');
  // doc.moveDown();
  // resume.experience.forEach((exp) => {
  //   doc.fontSize(12).text(exp.company);
  //   doc.fontSize(10).text(`${exp.position} (${exp.startDate} - ${exp.endDate})`);
  //   doc.fontSize(10).text(exp.details);
  //   doc.moveDown();
  // });

  // // Education
  // doc.fontSize(14).text('Education');
  // doc.moveDown();
  // resume.education.forEach((edu) => {
  //   doc.fontSize(12).text(edu.institution);
  //   doc.fontSize(10).text(`${edu.degree} (${edu.start} - ${edu.end})`);
  //   doc.fontSize(10).text(edu.details);
  //   doc.moveDown();
  // });

  // // Skills
  // doc.fontSize(14).text('Skills');
  // doc.moveDown();
  // doc.fontSize(10).text(resume.skills.map(skill => skill.name).join(', '));
  // doc.moveDown();

  // // Projects
  // doc.fontSize(14).text('Projects');
  // doc.moveDown();
  // resume.projects.forEach((project) => {
  //   doc.fontSize(12).text(project.name);
  //   doc.fontSize(10).text(project.description);
  //   doc.fontSize(10).text(`Link: ${project.link}`);
  //   doc.moveDown();
  // });

  // // Certifications
  // doc.fontSize(14).text('Certifications');
  // doc.moveDown();
  // resume.certifications.forEach((cert) => {
  //   doc.fontSize(12).text(cert.name);
  //   doc.fontSize(10).text(`Issuer: ${cert.issuer}`);
  //   doc.fontSize(10).text(`Date: ${cert.date}`);
  //   doc.fontSize(10).text(`Link: ${cert.link}`);
  //   doc.moveDown();
  // });
}

