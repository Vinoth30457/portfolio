import "../styles/contact.css";
import resume from "../project_img/vinoth.pdf";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="title">To Join With Me</h1>
      <h1 className="icon">
        <i class="fa-solid fa-rocket"></i>
      </h1>
      <h3 className="description">
        Why are you waiting to contact to me. let's say Hi
      </h3>
      <a href="mailto:vinoth30457@gmail.com" className="mail">
        Say hello
      </a>
      <a href={resume} className="mail" target="_blank">
        Download Resume
      </a>
    </div>
  );
};

export default Contact;
