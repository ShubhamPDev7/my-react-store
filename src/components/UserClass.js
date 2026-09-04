import React from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "UserClass Constructor called");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "dummy-image",
        bio: "Dummy-Bio",
        count: 0,
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/ShubhamPDev7");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate( ) {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + "UserClass Render called");
    const { name, location, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="github-avatar" src={avatar_url} alt="avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Bio: {bio}</h4>
      </div>
    );
  }
}

export default UserClass;
