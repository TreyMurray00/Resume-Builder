"use client"
import React from 'react'
import {Button} from '@/components/ui/button'
import { useRef } from 'react'
const page = () => {
    const pdfRef = useRef<HTMLIFrameElement>(null)
    const handlePrint = () => {
        if (pdfRef.current) {
            if (pdfRef.current.contentWindow) {
                pdfRef.current.contentWindow.focus(); 
                pdfRef.current.contentWindow.print();
            }
            
        }
    }
  return (
    <div className='flex flex-col y-h-screen '>
        <Button onClick={handlePrint}>
            Download PDF
        </Button>
        <iframe className="flex-grow" src="/pdf" ref={pdfRef} />

    </div>
  )
}

export default page