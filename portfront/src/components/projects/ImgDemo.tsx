import React from 'react'
import Image from 'next/image'

export const ImgDemo = () => {
    return (
        <div className='img-demo'>
            <Image 
                width={480}
                height={270}
                src="/test.png" alt={''}                
            />
            <Image 
                width={480}
                height={270}
                src="/test.png" alt={''}                
            />
            <Image 
                width={480}
                height={270}
                src="/test.png" alt={''}                
            />
        </div>
    )
}

