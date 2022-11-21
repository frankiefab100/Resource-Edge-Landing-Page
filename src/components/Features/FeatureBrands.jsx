import React from "react";
import UNNLogo from "/logo/UNN-logo.png";
import TeneceLogo from "/logo/Tenece-logo.png";
import PrivateEstateLogo from "/logo/Private-estate-logo.png";
import GenesysLogo from "/logo/Genesys-logo.png";
import "../../styles/sass/css/FeatureBrands.css";

const FeatureBrands = () => {
  return (
    <div className="featured-brands">
      <div className="logo">
        <img src={UNNLogo} alt="UNN logo" />
        <img src={TeneceLogo} alt="Tenece logo" />
        <img src={PrivateEstateLogo} alt="Private estate logo" />
        <img src={GenesysLogo} alt="Genesys tech hub logo" />
      </div>
    </div>
  );
};

export default FeatureBrands;
