import { NavBar } from "@/components/NavBar";
import { ProjectItem } from "@/components/ProjectItem";
import TestComp from "@/components/TestComp";
import { projectData } from "@/test/projects";
import Image from 'next/image';


export default function Home() {
  return (
    <> 
      {/* <h2> Le Home Page</h2> */}
      {/* <TestComp/> */}
      <div className="home-summary">
        <Image 
          src="/jamjamin.png" 
          alt="Jamjamin" 
          width={200}
          height={200}
          className="profile-pic"/>
        <div className="summary-details">
          <h1> Ben Rodenas </h1>
          <h3> Slicer of heads, maker of codes </h3>
          <div>
            <button> Download CV </button>
            <a href="projects">Projects</a>
          </div>
        </div>
      </div>
    </>
  );
}
