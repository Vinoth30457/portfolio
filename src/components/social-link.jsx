import React from "react";

const SocialLink = ({ id, href, icon }) => {
  return (
    <li key={id}>
      <a href={href} className="link">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
