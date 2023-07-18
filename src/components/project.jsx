import ProjectCard from "./project-card";
import { jsProject, reactProject } from "../constants";

import "../styles/project.css";

const Project = () => {
  return (
    <div className="project" id="project">
      <h1 className="title">React Project</h1>
      <ul className="javascript">
        {reactProject.map((item) => {
          return <ProjectCard {...item} />;
        })}
      </ul>
      <h1 className="title">Java Script Project</h1>
      <ul className="javascript">
        {jsProject.map((item) => {
          return <ProjectCard {...item} />;
        })}
      </ul>
    </div>
  );
};

export default Project;
