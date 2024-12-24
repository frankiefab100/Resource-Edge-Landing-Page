import React from "react";

const HeaderSection = ({ header, text }) => {
  return (
    <div className="heading">
      <h2 className="title">{header}</h2>
      <p className="text">{text}</p>
    </div>
  );
};

export default HeaderSection;
