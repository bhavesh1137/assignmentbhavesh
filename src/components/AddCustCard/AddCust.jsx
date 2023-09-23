import React from "react";
import "./addcust.css";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddCust() {
  return (
    <div className="addCust-container">
      <Link to={'/addCustomer'} className="add-btn-link">
        <button className="add-new-btn">
          <FaPlus /> add new customers
        </button>
      </Link>
    </div>
  );
}

export default AddCust;
