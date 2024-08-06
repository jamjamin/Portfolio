import { ProjectDataType } from '@/test/projects'
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
                    <ProjectTag name='Collaborative' tagStyle='category'/>
                    <ProjectTag name='ReactJS' tagStyle='react-js'/>
                    <ProjectTag name='NodeJS' tagStyle='node-js'/>
                </div>
            </div>
        </a>
    )
}