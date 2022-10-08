import React, { Suspense } from 'react'
import { Layout } from './Layout'

export const Home = () => {
  return (
    <div>
    <Suspense fallback={<span className="text-black text-center font-bold text-2xl flex justify-center items-center">Loading...</span>}>
        <Layout />
    </Suspense>
    </div>
  )
}
