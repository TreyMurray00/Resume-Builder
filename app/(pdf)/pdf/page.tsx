import ResumeTemplate from '@/components/custom/templates'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">

      <div className=" h-screen w-full p-4 justify-self-center ">
          <ResumeTemplate  template="template3" />
      </div>
     
    
    
  </div>
  )
}

export default page