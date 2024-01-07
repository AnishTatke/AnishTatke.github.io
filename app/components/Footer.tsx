import React from 'react';
import { formatString } from '../helper';

export default function Footer(props: any) {
    const links = props.links
    const resume = props.resume
    return (
        <div id='contact' className='w-full h-auto bg-black flex flex-col justify-center'>
            <div className='p-3 mt-2 grid grid-cols-2'>
                {Object.keys(links).map((key, idx) => (
                     <div key={idx} className='px-3 m-1 flex flex-row justify-between'>{formatString(key) + ": "} <a href={links[key].link} className='hover:text-grey'>{links[key].title}</a></div>
                ))}
            </div>
            <a className='w-60 p-2 m-2 border-[1px] border-grey rounded-md self-center text-center hover:bg-grey' href={resume}>
                <h2>Resume</h2>
            </a>
        </div>
    )
}
