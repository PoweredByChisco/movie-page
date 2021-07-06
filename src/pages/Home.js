import React from "react";
import "./styles/Home.css";
import apiData from "../apiData";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      /* Podria hacerse este manejo a traves de .then y resolve */
      const data = 0;
    } catch (error) {}
  };

  render() {
    return "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos perspiciatis at nulla veritatis fugit, obcaecati beatae praesentium officia iusto aperiam non cupiditate suscipit libero. Consequuntur laboriosam fuga officiis vitae.";
  }
}

export default Home;
