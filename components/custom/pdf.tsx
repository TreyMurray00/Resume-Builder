import React from 'react'
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer'
import { Resume } from '../../Types/types'

type PdfProps = {

   resume: Resume
}


const Pdf = () => {
  return (
    <Document>
      <Page size="A4">
        <Text>John Doe</Text>
        <Text>Bob burger</Text>
      </Page>
    </Document>
  )
}

export default Pdf