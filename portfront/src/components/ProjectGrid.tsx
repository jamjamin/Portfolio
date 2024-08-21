"use client"

import React, { useEffect, useState } from 'react'
import { Filters } from './Filters'
import { ProjectItem } from './ProjectItem'
import { projectData, ProjectDataType, ProjectTagType } from '@/data/projects'

export type FilterMapType = {
    search: string
    type : string
    category : string
    tech : string
    lang : string
}

export const ProjectGrid = () => {
    const [projects, setProjects] = useState(projectData);
    const [filterMap, setFilterMap] = useState<FilterMapType>({ 
        search: "", 
        type : "", 
        category : "",
        tech : "",
        lang: ""}
    );
    

    // callback here
    const filterProjects = (project : ProjectDataType) => {
        const { search, type, category, tech, lang } = filterMap
        const {projectTitle, projectType, tags} = project;
        const {technologies, languages} = project.projectDetails

        // Stringfy tags
        const tagArray : string[] = tags.map(tag => tag.tagName);
        const techArray : string[] = technologies.map(tech => tech.tagName);
        const langArray : string[] = languages.map(lang => lang.tagName);

        if (projectTitle.toLowerCase().includes(search.toLowerCase()) && projectType.includes(type) 
            && (tagArray.includes(category) || category === '')
            && (techArray.includes(tech) || tech === '')
            && (langArray.includes(lang) || lang === '')) { 
            return true 
        }
    }

    useEffect(() => {
        setProjects(projectData.filter(filterProjects))
    }, [filterMap])

    return (
        <>
            <div className='project-filters'> 
                <Filters filterMap={filterMap} setFilterMap={setFilterMap}/>
            </div>
            <div className='project-list'>
                {projects.map(project => <ProjectItem projectData={project}/>)}
            </div>
        </>
    )
}
