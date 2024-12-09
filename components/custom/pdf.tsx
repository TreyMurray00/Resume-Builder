import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { createTw} from "react-pdf-tailwind";
import { PersonalInfo, Education,Experience,Project, Skill, Certification} from '@/Types/types';

Font.register({
    family: 'Roboto',
    fonts: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
    ],
  });
  
  // Create Tailwind Instance
  const tw = createTw({
    theme: {
      fontFamily: {
        sans: ['Roboto'],
      },
      extend: {
        colors: {
          'primary': '#3B82F6',
        }
      }
    }
  });

type props = {
    PersonalInfo : PersonalInfo,
    Experience: Experience[],
    Education: Education[],
    Projects: Project[],
    Skills: Skill[],
    Certification: Certification[],

}

// Create Document Component
const MyDocument = (props: props) => (
    
    <Document>
    <Page size="A4" style={tw('p-10')}>
      {/* Header / Personal Information */}
      <View style={tw('mb-6')}>
        <Text style={tw('text-3xl font-medium text-primary')}>John Jones</Text>
        <Text style={tw('text-lg')}>JL</Text>
        <Text style={tw('text-sm')}>jj@mail.com|+0(000)000-0000</Text>
        <Text style={tw('text-sm')}>Lorem ipsum</Text>
      </View>

      {/* Summary */}
      <View style={tw('mb-6')}>
        <Text style={tw('text-lg font-medium text-primary mb-2')}>Professional Summary</Text>
        <Text style={tw('text-sm')}>
          lorem ipsum dolor sin
        </Text>
      </View>

      {/* Work Experience */}
      <View style={tw('mb-6')}>
        <Text style={tw('text-lg font-medium text-primary mb-2')}>Work Experience</Text>
        
        <View style={tw('mb-4')}>
          <Text style={tw('text-base font-medium')}>Senior Developer - Tech Solutions Inc.</Text>
          <Text style={tw('text-sm italic')}>January 2018 - Present</Text>
          <Text style={tw('text-sm')}>• Led development of company's flagship product, increasing user engagement by 40%</Text>
          <Text style={tw('text-sm')}>• Mentored junior developers and implemented best practices, improving team productivity</Text>
        </View>

        <View>
          <Text style={tw('text-base font-medium')}>Junior Developer - StartUp Co.</Text>
          <Text style={tw('text-sm italic')}>June 2015 - December 2017</Text>
          <Text style={tw('text-sm')}>• Developed and maintained multiple client websites</Text>
          <Text style={tw('text-sm')}>• Collaborated with design team to implement responsive layouts</Text>
        </View>
      </View>

      {/* Education */}
      <View style={tw('mb-6')}>
        <Text style={tw('text-lg font-medium text-primary mb-2')}>Education</Text>
        <Text style={tw('text-base font-medium')}>Bachelor of Science in Computer Science</Text>
        <Text style={tw('text-sm')}>University of Technology - Graduated May 2015</Text>
      </View>

      {/* Skills */}
      <View>
        <Text style={tw('text-lg font-medium text-primary mb-2')}>Skills</Text>
        <Text style={tw('text-sm')}>JavaScript, React, Node.js, Python, SQL, Git, Agile Methodologies</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument