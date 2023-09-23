import React, { useState } from "react";
import "./createCust.css";
import Data from "../Data/Data";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function CreateCust() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [street, setStreet] = useState("");
  const [no, setNo] = useState("");
  const [country, setCountry] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = fname,
      b = lname,
      c = email,
      d = phone,
      f = dob,
      g = street,
      h = no,
      i = country;

    Data.push({
      id: uniqueId,
      Fname: a,
      Lname: b,
      Email: c,
      Phone: d,
      DOB: f,
      Street: g,
      No: h,
      Country: i,
    });

    navigate("/");
  };

  return (
    <div className="container">
      <div className="title-section">
        <p className="title">Customer details</p>
        <p className="update-info">
          Kaktus Towers | Dybbølsbro 3, 4 | 7-N340 - 4
        </p>
      </div>

      <form className="details-form" onSubmit={handleSubmit}>
        <p className="form-title">Customer information</p>

        <div className="input-container">
          <div className="input-sec">
            <div className="details-form-sec">
              <label className="details-form-tag">First Name (required)</label>
              <input
                type="text"
                name="fname"
                className="details-form-input"
                placeholder="Enter your first name"
                required
                onChange={(e) => setFname(e.target.value)}
              />
            </div>

            <div className="details-form-sec">
              <label className="details-form-tag">Last Name (required)</label>
              <input
                type="text"
                name="lname"
                className="details-form-input"
                placeholder="Enter your last name"
                required
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>

          <div className="details-form-sec">
            <label className="details-form-tag">Email (required)</label>
            <input
              type="email"
              name="email"
              className="details-form-input"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-sec">
            <div className="details-form-sec">
              <label className="details-form-tag">Phone</label>
              <input
                type="number"
                name="phone"
                className="details-form-input"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="details-form-sec">
              <label className="details-form-tag">DOB</label>
              <input
                type="date"
                name="dob"
                className="details-form-input"
                placeholder="Enter your DOB"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>

          <div className="input-sec">
            <div className="details-form-sec">
              <label className="details-form-tag">Street</label>
              <input
                type="text"
                name="street"
                className="details-form-input"
                placeholder="Enter street name"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div className="details-form-sec">
              <label className="details-form-tag">No.</label>
              <input
                type="number"
                name="no"
                className="details-form-input"
                placeholder="Enter no"
                onChange={(e) => setNo(e.target.value)}
              />
            </div>

            <div className="details-form-sec">
              <label className="details-form-tag">Country</label>
              <input
                type="text"
                name="country"
                className="details-form-input"
                placeholder="Enter country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-footer">
          <Link to={"/"}>
            <button className="cancel-btn">cancel</button>
          </Link>

          <button
            type="submit"
            className="create-btn"
          >
            create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCust;
