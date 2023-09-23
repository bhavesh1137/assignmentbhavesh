import React, { useEffect, useState } from "react";
import "../CreateCust/createCust.css";
import Data from "../Data/Data";
import { Link, useNavigate } from "react-router-dom";

function EditCust() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [street, setStreet] = useState("");
  const [no, setNo] = useState("");
  const [country, setCountry] = useState("");
  const [id, setId] = useState("");

  let navigate = useNavigate();

  let index = Data.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Data[index];
    a.Fname = fname;
    a.Lname = lname;
    a.Email = email;
    a.Phone = phone;
    a.DOB = dob;
    a.Street = street;
    a.No = no;
    a.Country = country;

    // console.log(a)

    navigate("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setFname(localStorage.getItem("Fname"));
    setLname(localStorage.getItem("Lname"));
    setEmail(localStorage.getItem("Email"));
    setPhone(localStorage.getItem("Phone"));
    setDob(localStorage.getItem("DOB"));
    setStreet(localStorage.getItem("Street"));
    setNo(localStorage.getItem("No"));
    setCountry(localStorage.getItem("Country"));
  }, []);

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
                value={fname}
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
                value={lname}
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
              value={email}
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
                value={phone}
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
                value={dob}
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
                value={street}
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
                value={no}
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
                value={country}
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

export default EditCust;
