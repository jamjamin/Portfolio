export type ProjectDataType = {
    projectId : number,
    projectTitle : string,
    projectThumbnail?: string
    projectDesc : string
    projectDetails: ProjectDetailsType
    tags: ProjectTagType[]
}

type ProjectDetailsType = {
    overview: string[], // Each string element is a paragraph
    images?: string[],
    links: string[],
    members?: ProjectMembersType[],
    technologies: ProjectTagType[],
    languages: ProjectTagType[]
}

type ProjectMembersType = {
    name: string,
    link?: string
}

type ProjectTagType = {
    tagName : string,
    backgroundColor : string,
    color : string
}

export const projectData = [
    {
        projectId : 1,
        projectTitle : "Automated Vulnerability Management",
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
            technologies: [
                {tagName: "ReactJS", backgroundColor: "#154F57", color: "#46E9FF"}, 
                {tagName: "NodeJS", backgroundColor: "#335729", color: "#29EF31"}
            ],
            languages: [
                {tagName: "HTML/CSS", backgroundColor: "#5C5C5C", color: "#FFFFFF"},
                {tagName: "JavaScript", backgroundColor: "#5C5C5C", color: "#FFFFFF"}
            ]
        },
        tags: [
            {tagName: "University", backgroundColor: "#635627", color: "#FFDB56"},  
            {tagName: "Collaborative", backgroundColor: "#635627", color: "#FFDB56"}
        ]
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
            technologies: [
                {tagName: "Flutter", backgroundColor: "#00234D", color: "#3CD0FF"}, 
                {tagName: "Firebase", backgroundColor: "#553000", color: "#FF9100"}
            ],
            languages: [
                {tagName: "Dart", backgroundColor: "#5C5C5C", color: "#FFFFFF"}
            ]
        },
        tags: [
            {tagName: "University", backgroundColor: "#635627", color: "#FFDB56"},  
            {tagName: "Collaborative", backgroundColor: "#635627", color: "#FFDB56"}
        ]
    },
    {
        projectId : 3,
        projectTitle : "Sudoku",
        projectDesc : "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio sapien ipsum neque quisque feugiat magnis taciti. Justo ultricies rhoncus a proin pulvinar quis. Nullam varius tortor, cursus posuere praesent morbi himenaeos.",
        projectDetails: {
            overview: ["Paragraph 1", "Paragraph 2"],
            images: [],
            links: ["www.link1.com", "www.link2.net"],
            technologies: [
                {tagName: "DerbyDB", backgroundColor: "#00234D", color: "#3CD0FF"}, 
            ],
            languages: [
                {tagName: "Java", backgroundColor: "#5C5C5C", color: "#FFFFFF"}
            ]
        },
        tags: [
            {tagName: "University", backgroundColor: "#635627", color: "#FFDB56"},  
        ]
    },

]