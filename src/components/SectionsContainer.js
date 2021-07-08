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

/*   componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const NowIds = await apiData.movies.getNNowPlayingMoviesIds(10);
      const PopularIds = await apiData.movies.getNPopularMoviesIds(10);
      const UpcomingIds = await apiData.movies.getNUpcomingMoviesIds(10);
      const NowData = await apiData.movies.getNMovies(NowIds);
      const PopularData = await apiData.movies.getNMovies(PopularIds);
      const UpcomingData = await apiData.movies.getNMovies(UpcomingIds);
      this.setState({
        loading: false,
        data: { now: NowData, popular: PopularData, upcoming: UpcomingData },
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }; Estoy intentando desde aqui obtener todos los datos necesarios para asi solo renderizar un componente de section*/

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
        <SectionMyList />
        <SectionPopular />
        <SectionComingSoon />
      </React.Fragment>
    );
  }
}

export default SectionsContainer;
