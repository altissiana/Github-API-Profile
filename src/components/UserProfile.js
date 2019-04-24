import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData } from "../actions/actions";
// import linkPic from "../assets/link-solid.svg";
// import mapMarker from "../assets/map-marker.svg";
// import users from "../assets/users.svg";

class UserProfile extends Component {
  componentDidMount() {
    getUserData();
  }
  render() {
    return (
      <div className="userProfile">
        <img id="userPic" alt="userPic" src={this.props.user.avatar_url} />
        <h3>{this.props.user.name}</h3>
        <h4>{this.props.user.login}</h4>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    user: appState.userData
  };
}

export default connect(mapStateToProps)(UserProfile);
