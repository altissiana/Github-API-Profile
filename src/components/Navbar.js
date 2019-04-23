import React, { Component } from "react";
import "../styles/base.css";
// import bell from "../assets/bellWhite.png";
// import GHIcon from "../assets/gitHubIcon.png";
// import userPic from "../assets/userPic.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navHeader">
        <div className="navLeft">
          {/* <img src={GHIcon} alt="ghIcon" /> */}
          <form action="">
            <input
              type="text"
              placeholder="Search or jump to..."
              name="search"
            />
            <button>/</button>
          </form>
          <span>Pull requests</span>
          <span>Issues</span>
          <span>Marketplace</span>
          <span>Explore</span>
        </div>
        <div className="navRight">
          {/* <img id="marginRight" src={bell} alt="bell" /> */}
          <span>
            <i id="plus" className="fa fa-plus" />
          </span>
          <i className="fa fa-caret-down marginRight" />
          {/* <img id="userPic" src={userPic} alt="userPic" /> */}
          <i className="fa fa-caret-down marginRight" />
        </div>
      </div>
    );
  }
}

export default Navbar;
