import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Create a dynamic component that will only render on the client side
const Template1Content = dynamic(() => import('./Template1Content'), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
})

type Props = {
  className?: string
}

const Template1 = ({ className }: Props) => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <Template1Content className={className} />
    </Suspense>
  )
}

export default Template1