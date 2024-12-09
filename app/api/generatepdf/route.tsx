import { NextRequest, NextResponse } from "next/server";
import PDFDocument from 'pdfkit';
import { Certification, Education, Experience, PersonalInfo, Project, Skill } from "@/Types/types";

export async function POST(request: NextRequest) {
  try {
    const params = await request.json();
    const personalInfo: PersonalInfo = params["Personal"];
    const skills: Skill[] = params["Skills"];
    const education: Education[] = params["Education"];
    const projects: Project[] = params["Projects"];
    const certifications: Certification[] = params["Certifications"];
    const experience: Experience[] = params["Experience"];

    const resume = {
      personalInfo,
      experience,
      education,
      projects,
      skills,
      certifications,
    };

    console.log("Generating PDF with data:", JSON.stringify(resume, null, 2));

    const doc = new PDFDocument();
    const chunks: Uint8Array[] = [];

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => {
      const result = Buffer.concat(chunks);
      return new NextResponse(result, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="resume.pdf"',
        },
      });
    });

    // Generate PDF content
    generatePDF(doc, resume);

    doc.end();

    return new Promise((resolve) => {
      doc.on('end', () => {
        const result = Buffer.concat(chunks);
        resolve(new NextResponse(result, {
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="resume.pdf"',
          },
        }));
      });
    });

  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
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

