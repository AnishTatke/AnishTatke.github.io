'use client'
import React, { useState } from 'react'
import { formatString } from '../helper'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import MyRating from './MyRating';

export default function Banner(props: any) {
    const mainStyle = props.style
    const data = props.data
    const [open, setOpen] = useState(true)

    return (
        <div className={mainStyle}>
            <button className='p-1 w-full flex justify-center border-2 border-grey rounded-md cursor-pointer hover:bg-grey' onClick={() => setOpen((prev) => !prev)}>
                <div className='py-1 w-max flex flex-row justify-between items-center text-center text-xl'>
                    <h2>{data.title}</h2>
                    {open ? (<FaAngleUp />) : (<FaAngleDown />)}
                </div>
            </button>

            {open && <div className='w-max mx-auto left-0 right-0'>
                <ul key={data.title} className='bg-grey bg-opacity-25 px-5 pt-2'>
                    {data.title == "Bio Data" ?
                        Object.keys(data.content).map((key: string, idx: number) => (
                            <React.Fragment key={idx}>
                                <li className='py-1'>
                                    {formatString(key) + ": "}<span className='pl-1 px-2'>{formatString(data.content[key].toString())}</span>
                                </li>
                                {idx < Object.keys(data.content).length - 1 && <hr />}
                            </React.Fragment>
                        ))
                        :
                        Object.keys(data.content).map((key: string, idx: number) => {
                            return (
                                <React.Fragment key={idx}>
                                    <li className='pl-1 py-2 w-full flex flex-row justify-between'>
                                        {formatString(key) + ": "} <MyRating data={{value: data.content[key], id: idx}} />
                                    </li>
                                    {idx < Object.keys(data.content).length - 1 && <hr />}
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
            </div>}
        </div>
    )
}
