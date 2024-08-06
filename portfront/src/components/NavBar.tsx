import React from 'react'
import Image from 'next/image'

export const NavBar = () => {
    return (
        <div className="nav-container">
            <div className='nav-left'>
                <Image
                    src="/jamjamin.png"
                    alt="jamjamin"
                    width={40}
                    height={40}
                    className='profile-pic'
                />
                <div> Ben Rodenas </div>
            </div> 
            <nav>
                <a href="/">Home</a>
                <a href="/about">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    )
}

