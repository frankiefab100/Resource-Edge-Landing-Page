import React from "react";

const Box = ({ icon, iconId, heading, body }) => {
  return (
    <div className="box">
      <div className="icon" id={iconId}>
        <img src={icon} alt="icon image" />
      </div>
      <h4 className="title">{heading}</h4>
      <p className="details">{body}</p>
    </div>
  );
};

export default Box;
