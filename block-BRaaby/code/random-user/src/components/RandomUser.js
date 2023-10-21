import React, { Component } from "react";
import Loader from "./Loader";

class RandomUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: null,
    };
  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  fetchUserDetails = () => {
      fetch("https://randomuser.me/api/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          userDetails: data.results[0],
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  handleClick = () => {
    this.fetchUserDetails();
    this.setState({
      userDetails: null,
    })
  }
  
  render() {
    if (this.state.userDetails) {
      const data = this.state.userDetails;

      return (
        <div className="user-details">
          <img
            src={data.picture.medium}
            alt={`${data.name.first} ${data.name.last}`}
          />
          <h2>
            {data.name.title}. {data.name.first} {data.name.last}
          </h2>
          <p>
            <strong>Gender:</strong> {data.gender}
          </p>
          <p>
            <strong>Date of Birth:</strong> {data.dob.date}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <p>
            <strong>Location:</strong> {data.location.street.number}{" "}
            {data.location.street.name}, {data.location.city},{" "}
            {data.location.state}, {data.location.country},{" "}
            {data.location.postcode}
          </p>
          <p>
            <strong>Nationality:</strong> {data.nat}
          </p>
          <p>
            <strong>ID:</strong> {data.id.name}: {data.id.value}
          </p>
          <p>
            <strong>Registered Since:</strong> {data.registered.date}
          </p>
          <button onClick={this.handleClick}>Generate Random User</button>
        </div>
      );
    } else {
      return (
        <Loader />
      );
    }
  }
}

export default RandomUserDetails;
