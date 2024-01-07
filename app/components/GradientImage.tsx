import React from 'react'
import Image from 'next/image'

export default function GradientImage(props: any) {
    const img = props.image
    return (
        <div className={props.containerClass}>
            <div className={props.maskClass}></div>
            {props.priority ? <Image
                priority
                className='z-0 !left-px'
                src={img}
                alt='Image'
                fill
            /> : <Image
                className='z-0 !left-px'
                src={img}
                alt='Image'
                fill
            />}
        </div>
    )
}
