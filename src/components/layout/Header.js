import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
const Header = (props) => {
  const gg = props.value.navItems.map((na)=>{
    return(
<li>
    <Link to={na.url}>{na.name}</Link>
          </li>
    );
  })

  return (
    <div class="header">
      <div class="logo">
        <img
          class="icon"
          src="https://res.cloudinary.com/hezzie/image/upload/v1564134874/thelogo_aqqc6h.png"
        />
      </div>
      <ul onclick="media()" class="menu" id="menu">
        <li>
          <i class="fas fa-bars"></i>
        </li>
      </ul>
      <div class="nav">
        <ul>
          <li>
            <a href="index.html">
              <i class="fa fa-home"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-search"></i>
            </a>
          </li>
            {gg}
            {/* <Link to="/signin">signin</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/property">Property</Link>
          </li>
          <li>
            <Link to="/properties">Properties</Link>
          </li>
          <li>
            <Link to="/createProperty">Create Property</Link>
          </li> */}
          <li id="logout" onclick="logoutUserI()">
            <a href="#">logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
