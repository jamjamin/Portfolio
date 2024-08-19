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
                    {/* Potential DRY Violation Below */}
                    {projectData.tags.map(({tagName, backgroundColor, color}) => <ProjectTag name={tagName} tagStyle={{bg: backgroundColor, color: color}}/>)}
                    {projectData.projectDetails.technologies.map(({tagName, backgroundColor, color}) => <ProjectTag name={tagName} tagStyle={{bg: backgroundColor, color: color}}/>)}
                    {projectData.projectDetails.languages.map(({tagName, backgroundColor, color}) => <ProjectTag name={tagName} tagStyle={{bg: backgroundColor, color: color}}/>)}
                    {/* Potential DRY Violation Above */}
                </div>
            </div>
        </a>
    )
}