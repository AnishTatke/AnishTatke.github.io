import React from 'react'
import { Rating } from '@material-tailwind/react'

export default function MyRating(props: any) {
    const data = props.data
    return (
        <Rating
            readonly
            value={data.value}
            ratedIcon={<RatedSkillBar />}
            unratedIcon={<UnratedSkillBar />}
            className='px-1 mx-2 w-fit border-[1px] border-light rounded-md flex flex-row justify-between hover:border-[2px]'
        />
    )
}

function UnratedSkillBar() {
    return (
        <svg className='w-14 h-5 fill-none pr-1' viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100%" height="100%" rx="2.75" stroke="#D9D9D9" strokeWidth="1.0" />
        </svg>
    )
}

function RatedSkillBar() {
    return (
        <svg className='w-14 h-5 fill-none pr-1' viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100%" height="100%" rx="2.75" fill="#D9D9D9" stroke="#D9D9D9" strokeWidth="0.5" />
        </svg>
    )
}
