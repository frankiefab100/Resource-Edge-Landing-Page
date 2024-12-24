import React from "react";

const Frame = ({ mobile, desktop, fallback, altText }) => {
  return (
    <div className="frame">
      <picture>
        <source media="(max-width: 480px)" srcSet={mobile} alt={altText} />
        <source media="(min-width: 481px)" srcSet={desktop} alt={altText} />
        <img src={fallback} alt={altText} />
      </picture>
    </div>
  );
};

export default Frame;
