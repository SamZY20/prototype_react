import React from "react";
import Logo from "../rizurfLogo.png";
import "../css/header.css";
import { FaInfoCircle, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container-fluid bg-white">
      <div className="p-2 hstack justify-content-between">
        <div>
          <img className="img-fluid" src={Logo} alt="Rizurf_Logo" />
        </div>
        <div>
          <FaInfoCircle className="fs-1 me-3 text-info" />
          <FaSearch className="fs-3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
