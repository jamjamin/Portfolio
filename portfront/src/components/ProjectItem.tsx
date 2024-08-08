import { ProjectDataType } from '@/data/projects'
import Image from 'next/image'
import React from 'react'
import { ProjectTag } from './ProjectTag'

type ProjectItemProps = {
    projectData : ProjectDataType
}

export const ProjectItem = ({ projectData } : ProjectItemProps) => {
    return (
        <a className='project-item' href={`/projects/${projectData.projectId}`}>
            {/* <Image
                src="/test.png" 
                width={269} 
                height={151} 
                alt={''}
            /> */}
            <img src="/test.png" width={384} height={216}/>
            <div className='project-info'>
                <div className='project-title'> {projectData.projectTitle} </div>
                <p> {projectData.projectDesc} </p>
                <div className='project-tags'> 
                    {projectData.tags.map(tag => <ProjectTag name={tag} tagStyle='category'/>)}
                    {projectData.projectDetails.technologies.map(tech => <ProjectTag name={tech}/>)}
                    {projectData.projectDetails.languages.map(lang => <ProjectTag name={lang}/>)}
                </div>
            </div>
        </a>
    )
}