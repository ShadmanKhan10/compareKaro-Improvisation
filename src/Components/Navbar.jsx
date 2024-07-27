import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <p className="logo">CompareKaro</p>
      </div>
      <div className="menu-list-container">
        <p className="list-items">Home</p>
        <p className="list-items">About</p>
        <p className="list-items">Services</p>
        <p className="list-items">Items</p>
        <p className="list-items">SignIn</p>
        <p className="list-items">Join</p>
      </div>
    </div>
  );
}
