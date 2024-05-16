import React from 'react'

export default function SectionTitle({heading, description}) {
  return (
    <div className='text-center w-1/3 mx-auto mb-10 z-10'>
        <p className='text-yellow-400 mb-1 z-10'>---{description}---</p>
        <h1 className='text-4xl  py-3 border-y-4 z-10'>{heading}</h1>
    </div>
  )
}
