import React from "react";
import "./home.css";
import Data from "../Data/Data";
import { BsQuestionCircleFill } from "react-icons/bs";
import Header from "../../components/Header/Header";
import DataCard from "../DataCard/DataCard";
import AddCust from "../AddCustCard/AddCust";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const handleDelete = (id) => {
    let index = Data.map((e) => {
      return e.id;
    }).indexOf(id);

    Data.splice(index, 1);

    navigate("/");
  };

  const handleEdit = (
    id,
    fname,
    lname,
    email,
    phone,
    dob,
    street,
    no,
    country
  ) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("Fname", fname);
    localStorage.setItem("Lname", lname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("DOB", dob);
    localStorage.setItem("Street", street);
    localStorage.setItem("No", no);
    localStorage.setItem("Country", country);
  };

  return (
    <div className="home-container">
      <div className="title-container">
        <p className="title">
          Documents <BsQuestionCircleFill />
        </p>
        <p className="update-info">
          Last updated by {}, 19. Jan. 2023 | 16:21:03
        </p>
      </div>
      <Header />

      <div className="data-container">
        {Data.map((item) => {
          return (
            <DataCard
              fname={item.Fname}
              lname={item.Lname}
              email={item.Email}
              phone={item.Phone}
              dob={item.DOB}
              street={item.Street}
              no={item.No}
              country={item.Country}
              id={item.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}

        <AddCust />
      </div>
    </div>
  );
}

export default Home;
