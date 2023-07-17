import "../styles/footer.css";
import { socialLink } from "../constants";
import SocialLink from "./social-link";

const Footer = () => {
  return (
    <footer>
      <ul className="social-links">
        {socialLink.map((item) => {
          return <SocialLink {...item} />;
        })}
      </ul>
      <a href="#home" className="top">
        <i class="fa-solid fa-jet-fighter-up"></i>
      </a>
      <p className="footer-content">
        &copy; VINOTH KUMAR {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
