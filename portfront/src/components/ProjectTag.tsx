import React from 'react'
import '@/styles/ProjectTag.css'

type ProjectTagProps = {
    name? : string
    tagStyle? : TagStyleType
}

type TagStyleType = {
    bg: string,
    color: string
}


export const ProjectTag = ({ name, tagStyle } : ProjectTagProps) => {
    return (
        <div 
            className={`project-tag`} 
            style={{backgroundColor : tagStyle?.bg, color: tagStyle?.color}}
        >
            {name ? name : 'Insert Tag'}
        </div>
    )
}

