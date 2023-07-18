import React from "react";

const Image = ({ id, href, icon, text, itemClass }) => {
  return (
    <div className="image">
      <a href={href} key={id} target="_blank">
        <img src={icon} alt={text} className={itemClass} />
      </a>
    </div>
  );
};

export default Image;
