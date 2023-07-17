import "../styles/skills.css";
import Image from "./img";
import { tech } from "../constants";

const Skill = () => {
  return (
    <div className="skills" id="skill">
      <h1 className="title">WHAT I LEARNED</h1>
      <p className="description">
        As an enthusiastic learner in the fast-paced web development industry, I
        am always eager to expand my knowledge and skills. Here are
      </p>
      <h3 className="tech-title">TECHNOLOGIES I'VE WORKED WITH</h3>
      <div className="img-container">
        {tech.map((item) => {
          return <Image {...item} />;
        })}
      </div>
    </div>
  );
};

export default Skill;
