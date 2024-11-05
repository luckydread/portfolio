import React from 'react'
import ProjectLayout from './ProjectLayout';

interface Project {
  id: number;
  name: string;
  description: string;
  date: string;
  demoLink: string;
}

const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {

  return (
    <div className=' w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'>

        {projects.map((project,index) => {
            return <ProjectLayout {...project} key={index}/>
        })}
    </div>
  )
}

export default ProjectList