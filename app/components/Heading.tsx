"use client"
import React from 'react'

export default function Heading(props: any) {
  return (
    <div className='flex mt-2 py-5 justify-center'>
      <div className='mx-3 w-40 self-center'>
        <hr />
      </div>
      <h1 className='text-center text-3xl font-kaushanScript'>{props.children}</h1>
      <div className='mx-3 w-40 self-center'>
        <hr />
      </div>
    </div>
  )
}
