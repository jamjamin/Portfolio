export type ProjectDataType = {
    projectId : number,
    projectTitle : string,
    projectThumbnail?: string
    projectDesc : string
    projectDetails: ProjectDetailsType
    tags: string[]
}

type ProjectDetailsType = {
    overview: string[], // Each string element is a paragraph
    images?: string[],
    links: string[],
    members: ProjectMembersType[],
    technologies: string[]
    languages: string[]
}

type ProjectMembersType = {
    name: string,
    link?: string
}

export const projectData = [
    {
        projectId : 1,
        projectTitle : "AVM",
        projectDesc : "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio sapien ipsum neque quisque feugiat magnis taciti. Justo ultricies rhoncus a proin pulvinar quis. Nullam varius tortor, cursus posuere praesent morbi himenaeos.",
        projectDetails: {
            overview: ["Paragraph 1", "Paragraph 2"],
            images: [],
            links: ["www.link1.com", "www.link2.net"],
            members: [
                {
                    name: "Ben Rodenas",
                    link: "www.linkedin.com"
                },
                {
                    name: "Simon Quach",
                    link: "www.linkedin.com"
                }
            ],
            technologies: ["ReactJS", "NodeJS"],
            languages: ["HTML/CSS", "JavaScript"]
        },
        tags: ["University", "Collaborative"]
    },
    {
        projectId : 2,
        projectTitle : "Project Loner",
        projectDesc : "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio sapien ipsum neque quisque feugiat magnis taciti. Justo ultricies rhoncus a proin pulvinar quis. Nullam varius tortor, cursus posuere praesent morbi himenaeos.",
        projectDetails: {
            overview: ["Paragraph 1", "Paragraph 2"],
            images: [],
            links: ["www.link1.com", "www.link2.net"],
            members: [
                {
                    name: "Michael Calby",
                    link: "www.linkedin.com"
                },
                {
                    name: "Ben Rodenas",
                    link: "www.linkedin.com"
                }
            ],
            technologies: ["Flutter", "Firebase"],
            languages: ["Dart"]
        },
        tags: ["University", "Collaborative"]
    },
]