import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import Pdf from './pdf'
import { Resume } from '../../Types/types'
const PdfViewer = () => {
  return (
    <PDFViewer>
        <Pdf/>
    </PDFViewer>
  )
}

export default PdfViewer