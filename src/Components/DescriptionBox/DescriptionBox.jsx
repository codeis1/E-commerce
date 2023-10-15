import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          A popular fashion retailer that offers a wide range of white clothing
          options for men, women, and children.
        </p>
        <p>
          A UK-based online fashion and beauty store that offers a variety of
          white clothing options.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
