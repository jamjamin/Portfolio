import { NavBar } from '@/components/NavBar'
import React from 'react'
import Image from 'next/image'

import '@/styles/ProjectDetails.css'
import { ImgDemo } from '@/components/projects/ImgDemo'

type ProjectDetailsProps = {
    params : {
        projectId : string
    }
}

export default function ProjectDetails({ params } : ProjectDetailsProps) {
    return (
        <>
            <h1> Project #{params.projectId} </h1>
            <div className='under-title'>
                <text> Project Type </text>
                <text> Project Start </text>
                <text> Last Updated </text>
            </div>
            <ImgDemo/>
            <div className='project-details'>
                <div className='details-side'>
                    <div className='project-links'>
                        <h2> Links </h2>
                        <p> www.whatisLife.com </p>
                        <p> www.whatisLife.com </p>
                        <p> www.whatisLife.com </p>
                    </div>
                    <div className='project-members'>
                        <h2> Project Members </h2>
                        <p> - Person 1 : LinkedIn </p>
                        <p> - Person 2 : LinkedIn </p>
                        <p> - Person 3 : LinkedIn </p>
                        <p> - Person 4 : LinkedIn </p>
                    </div>
                    <div className='project-techs'>
                        <h2> Technologies/Tools </h2>
                        <p> Python </p>
                    </div>
                </div>
                <div className='details-main'>
                    <h2> Project Overview </h2>
                    <p> 
                        In a world where bending elements is the norm and comedy is the unexpected guest, 
                        Aang, the carefree Avatar, leads a band of misfit heroes on an uproarious quest for peace. 
                        Katara, the ever-optimistic waterbender, tries to keep everyone on track while Sokka, 
                        the self-proclaimed comedic genius, can't seem to stop slipping on banana peels (metaphorically speaking). 
                        Enter Zuko, the brooding prince with a flair for dramatic entrances and an uncanny ability to accidentally 
                        set his own ship on fire. And let's not forget Toph, the feisty earthbender who sees through the world with the 
                        clarity of a sarcastic hawk. Together, they stumble through slapstick battles and pratfall-filled escapades, 
                        all while trying to save the world from the Fire Nation's not-so-menacing threats. Will they succeed? 
                        Well, with Aang riding penguin sledding into battle, anything is possible in this sidesplitting saga of friendship and bending gone awry. 
                    </p>
                </div>
            </div>
            
            
        </>
    )
}
