"use client"

import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Printer } from 'lucide-react'

export function PrintButton() {
  const printFrameRef = useRef<HTMLIFrameElement>(null)

  const handlePrint = () => {
    const iframe = printFrameRef.current
    if (!iframe || !iframe.contentWindow) return

    // Get the resume template content
    const resumeContent = document.getElementById('resume-template')
    if (!resumeContent) return

    // Get all stylesheets from the main document
    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          // Get all CSS rules from the stylesheet
          const cssRules = Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n')
          return cssRules
        } catch (e) {
          // Some stylesheets might be from different origins and can't be accessed
          console.warn('Could not access stylesheet:', e)
          return ''
        }
      })
      .filter(Boolean)
      .join('\n')

    // Write to the iframe
    iframe.contentWindow.document.open()
    iframe.contentWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume</title>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 20mm;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            /* Include all styles from main document */
            ${styles}
          </style>
        </head>
        <body>
          ${resumeContent.outerHTML}
        </body>
      </html>
    `)
    iframe.contentWindow.document.close()

    // Wait a bit for styles to be applied
    setTimeout(() => {
      if (iframe.contentWindow) {
        iframe.contentWindow.focus()
        iframe.contentWindow.print()
      }
    }, 500)
  }

  return (
    <>
      <Button 
        onClick={handlePrint}
        className="flex items-center gap-2"
      >
        <Printer className="h-4 w-4" />
        Print Resume
      </Button>
      <iframe 
        ref={printFrameRef}
        style={{ display: 'none' }}
        title="Print Frame"
      />
    </>
  )
}