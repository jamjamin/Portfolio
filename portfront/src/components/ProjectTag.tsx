import React from 'react'

import '@/styles/ProjectTag.css'

type ProjectTagProps = {
    name? : string
    tagStyle? : string
}

export const ProjectTag = ({ name, tagStyle } : ProjectTagProps) => {
    return (
        <div className={`project-tag ${tagStyle ? tagStyle : 'general'}`}>
            {name ? name : 'Insert Tag'}
        </div>
    )
}

