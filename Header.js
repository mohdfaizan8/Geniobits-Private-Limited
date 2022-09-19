import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src="https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545204?k=20&m=666545204&s=612x612&w=0&h=IKSdCIxuagnoASRscsVoP_o9boTdp4LDamWVy-m0XLQ=" alt="" className="unknown" />
        <label className="dropdown">
       <div className="dd-button">
         Shubham Shirse
         </div>
         </label>
        </div>
        <div className="below_header">
            <ul>
                <li className="confi">Configuration</li>
                <li className="confi">Employee List</li>
                <li className="confi"><NavLink to="/personal">Add Employee</NavLink></li>
                <li className="confi">Reports</li>
            </ul>
        </div>
    </>
  );
};

export default Header;
