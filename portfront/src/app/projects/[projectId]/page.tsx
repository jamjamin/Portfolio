import React from 'react'

type ProjectDetailsProps = {
    params : {
        projectId : string
    }
}

export default function ProjectDetails({ params } : ProjectDetailsProps) {
    return (
        <h1> Project #{params.projectId} </h1>
    )
}
