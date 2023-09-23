import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./dataCard.css";

function DataCard(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="dataCard-container">
      <p className="data-tag">#{props.id}</p>
      <div className="fullname-div">
        <div className="data-div">
          <p className="data-tag">First Name</p>
          <p className="data-value">{props.fname}</p>
        </div>

        <div className="data-div">
          <p className="data-tag">Last Name</p>
          <p className="data-value">{props.lname}</p>
        </div>
      </div>

      <div className="data-div">
        <p className="data-tag">Email</p>
        <p className="data-value">{props.email}</p>
      </div>

      <div className="data-div">
        <p className="data-tag">Phone</p>
        <p className="data-value">{props.phone}</p>
      </div>

      <div className="data-div">
        <p className="data-tag">DOB</p>
        <p className="data-value">{props.dob}</p>
      </div>

      <div className="data-div">
        <p className="data-tag">Adress</p>
        <p className="data-value">
          {props.street} {props.no} {props.country}
        </p>
      </div>

      <div className="data-div">
        <p className="data-tag">SSN</p>
        <p className="data-value">80801</p>
      </div>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        <BsThreeDotsVertical />
      </button>

      {open && (
        <div className="submenu">
          <ul>
            <Link to={"./editCustomer"} className="add-btn-link">
              <li
                className="menu-item"
                onClick={() => {
                  setOpen(false);
                  props.handleEdit(
                    props.id,
                    props.fname,
                    props.lname,
                    props.email,
                    props.phone,
                    props.dob,
                    props.street,
                    props.no,
                    props.country
                  );
                }}
              >
                Edit
              </li>
            </Link>

            <li
              className="menu-item"
              onClick={() => {
                setOpen(false);
                props.handleDelete(props.id);
              }}
            >
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DataCard;
