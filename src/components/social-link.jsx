import React from "react";

const SocialLink = ({ id, href, icon }) => {
  return (
    <li key={id}>
      <a href={href} className="link" target="_blank">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
