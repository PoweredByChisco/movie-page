import React from "react";
import "./styles/SectionsContainer.css";
import SectionMyList from "./sections/SectionMyList";
import SectionPopular from "./sections/SectionPopular";
import SectionComingSoon from "./sections/SectionComingSoon";
import PageLoading from "./PageLoading";
import apiData from "../apiData";

class SectionsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      now: undefined,
      popular: undefined,
      upcoming: undefined,
    },
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
      const data = await apiData.movies.getData(10, "movie", "now_playing");
      this.setState({ loading: false, data: { now : data } });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return "Error";
    }

    const movie = this.state.data;

    return (
      <React.Fragment>
        <SectionMyList data={this.state.data.popular}/>
        {/* <SectionPopular />
        <SectionComingSoon /> */}
      </React.Fragment>
    );
  }
}

export default SectionsContainer;
