"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import the ResumeForm content with no SSR
const ResumeFormContent = dynamic(
  () => import('./ResumeFormContent'),
  { 
    ssr: false,
    loading: () => (
      <div className="space-y-4 overflow-y-auto animate-pulse">
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-40 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
    )
  }
)

export function ResumeForm() {
  return (
    <Suspense 
      fallback={
        <div className="space-y-4 overflow-y-auto animate-pulse">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
        </div>
      }
    >
      <ResumeFormContent />
    </Suspense>
  )
}