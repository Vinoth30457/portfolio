const ProjectCard = ({ id, text, gitHub, netlify, image }) => {
  return (
    <li className="project-card" key={id}>
      <div className="project-img-container">
        <img src={image} alt="" className="project-img" />
      </div>
      <h1 className="project-title">{text}</h1>
      <div className="button">
        <a href={netlify} className="live-link">
          Live Link
        </a>
        <a href={gitHub} className="live-link">
          Source Link
        </a>
      </div>
    </li>
  );
};

export default ProjectCard;
