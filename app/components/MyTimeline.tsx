"use client"
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaLocationDot } from "react-icons/fa6";

export default function MyTimeline(props: any) {
  const events: any[] = props.events

  const getDuration = () => {
    let years = events.map((event: any) => event.year).toSorted()
    return years[years.length - 1] - years[0]
  }

  return (
    <div className='relative p-2 pt-5 w-full h-[100px]'>
      <div className='absolute top-1/2 left-0 mr-1 w-full pl-5 h-[15px] rounded-r-lg bg-white bg-[linear-gradient(90deg,rgba(30,30,30,1.00)_0%,rgba(30,30,30,0.00)_100%)]'>
        <div className='absolute my-0 top-[20%] right-0 mr-1 w-[9px] h-[9px] float-right rounded-full bg-board'></div>
        <div className='relative bottom-full w-full flex flex-row justify-around'>
          {events.map((event, idx) => (
            <TimelineEvent key={idx} data={{ event, idx }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TimelineEvent(props: any) {
  const data = props.data.event;
  return props.data.idx % 2 == 0 ? (
    <div className='relative w-12 h-12 rounded-full bg-white'>
      <div className='absolute mx-auto top-[20%] left-[20%] w-7 h-7 rounded-full bg-board'></div>
      <span className='absolute left-[15%] bottom-full tracking-wide'>{data.year}</span>
      <svg className='absolute left-[23px] top-[47px] mx-auto' width="2" height="50" viewBox="0 0 2 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="2" height="50" fill="#FFFFFF" />
      </svg>
      <TimelineBox data={data} style="p-2 relative top-[200%] w-max h-auto border-2 border-bg-white flex flex-col justify-center rounded-md"/>
    </div>
  ) : (
    <div className='relative w-12 h-12 rounded-full bg-white'>
      <div className='absolute mx-auto top-[20%] left-[20%] w-7 h-7 rounded-full bg-board'></div>
      <span className='absolute left-[15%] top-full tracking-wide'>{data.year}</span>
      <svg className='absolute left-[23px] bottom-[47px] mx-auto' width="2" height="50" viewBox="0 0 2 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="2" height="50" fill="#FFFFFF" />
      </svg>
      <TimelineBox data={data} style="p-2 relative bottom-[192%] float-right w-max h-auto border-2 border-bg-white flex flex-col justify-center rounded-md"/>
    </div>
  )
}

function TimelineBox(props: any) {
  const data = props.data
  const style = props.style
  const [open, setOpen] = useState(false)
  return (
    <div className={style}>
      <div className='flex flex-row justify-around'>
        {!open && <h2 className='self-center px-1'>{data.short_title}</h2>}
        {open && <h2 className='px-1'>{data.event_title}</h2>}
        <span className='opacity-0 text-xs self-center hover:opacity-100' onClick={() => setOpen((prev) => !prev)}>{open ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>

      {open && (
        <div className='mt-1 px-1 text-sm'>
          <h4>{data.purpose} | {data.profile}</h4>
          <span className='flex flex-row w-max justify-around'><FaLocationDot /> {data.location}, {data.country}</span>
        </div>
      )}
    </div>
  )
}
