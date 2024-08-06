import { NavBar } from '@/components/NavBar'
import { ProjectItem } from '@/components/ProjectItem'
import { projectData } from '@/test/projects'
import React from 'react'

import '../../styles/ProjectList.css'

export default function Projects() {
    return (
        <div>
            <h1> Projects </h1>
            <div> 
                <input type="text"/>
            </div>
            <div className='project-list'>
                <ProjectItem projectData={projectData[0]}/>
                <ProjectItem projectData={projectData[1]}/>
            </div>

        </div>
    )
}
