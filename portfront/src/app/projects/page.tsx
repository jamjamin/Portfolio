import { NavBar } from '@/components/NavBar'
import { ProjectItem } from '@/components/ProjectItem'
import { projectData } from '@/data/projects'
import React from 'react'

import '../../styles/ProjectList.css'

export default function Projects() {
    return (
        <div>
            <h1> Projects </h1>
            <div className='project-filters'> 
                <input type="text" placeholder='Search Project' className='search-project'/>
                <div className='filter-selection'>
                    Filters 
                    <select name="type">
                        <option> Website </option>
                        <option> Desktop </option>
                        <option> Mobile </option>
                    </select>
                    <select name="category">
                        <option> Collaborative </option>
                        <option> Experimental </option>
                        <option> University </option>
                    </select>
                    <select name="tech">
                        <option> NextJS </option>
                        <option> ReactJS </option>
                        <option> NodeJS </option>
                    </select>
                    <select name="language">
                        <option> Java </option>
                        <option> Python </option>
                        <option> JavaScript </option>
                        <option> TypeScript </option>
                    </select>
                </div>
            </div>
            <div className='project-list'>
                {projectData.map(project => <ProjectItem projectData={project}/>)}
            </div>
        </div>
    )
}
