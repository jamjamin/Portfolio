import React from 'react'
import Image from 'next/image'
import { NavBar } from '@/components/NavBar'
import { ProjectTag } from '@/components/ProjectTag'

import { ImgDemo } from '@/components/projects/ImgDemo'
import { projectData } from '@/data/projects'
import '@/styles/ProjectDetails.css'

type ProjectDetailsProps = {
    params : {
        projectId : string
    }
}

export default function ProjectDetails({ params } : ProjectDetailsProps) {

    const id : number = parseInt(params.projectId) - 1;
    const project = projectData[id];

    return (
        <>
            <h1> {project.projectTitle} </h1>
            <div className='under-title'>
                <text> {project.projectType} </text>
                <text> Project Start </text>
                <text> Last Updated </text>
            </div>
            <ImgDemo/>
            <div className='project-details'>
                <div className='details-side'>
                    <div className='project-links'>
                        <h2> Links </h2>
                        {project.projectDetails.links.map(link => <p> {link} </p>)}
                    </div>
                    <div className='project-members'>
                        <h2> Project Members </h2>
                        {project.projectDetails.members?.map(member => <p> {member.name} - {member.link} </p>)}
                    </div>
                    <div className='project-techs'>
                        <h2> Technologies/Tools </h2>
                        <div className='project-tags'>
                            {project.projectDetails.technologies.map(({tagName, backgroundColor, color}) => <ProjectTag name={tagName} tagStyle={{bg: backgroundColor, color: color}}/>)}
                            {project.projectDetails.languages.map(({tagName, backgroundColor, color}) => <ProjectTag name={tagName} tagStyle={{bg: backgroundColor, color: color}}/>)}
                        </div>
                    </div>
                </div>
                <div className='details-main'>
                    <h2> Project Overview </h2>
                    {project.projectDetails.overview.map(paragraph => <p> {paragraph} </p>)}
                </div>
            </div>
            
            
        </>
    )
}
