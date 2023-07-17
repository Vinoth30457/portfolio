import ProjectCard from "./project-card";
import { jsProject } from "../constants";

import "../styles/project.css";

const Project = () => {
  return (
    <div className="project" id="project">
      <h1>Java Script Project</h1>
      <ul className="javascript">
        {jsProject.map((item) => {
          return <ProjectCard {...item} />;
        })}
      </ul>
    </div>
  );
};

export default Project;
