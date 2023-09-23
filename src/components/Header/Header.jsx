import React from "react";
import "./header.css";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="btn-container">
        <button className="btn">Documents</button>
        <button className="btn">Document packages</button>
        <button className="btn">Signing packages</button>
      </div>

      <Link to={'/addCustomer'} className="add-btn-link">
        <button className="add-new-btn">
          <FaPlus /> add new customers
        </button>
      </Link>
    </div>
  );
}

export default Header;
