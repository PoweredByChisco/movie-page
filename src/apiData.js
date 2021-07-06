const apiKey = "b89fc45c2067cbd33560270639722eae";

/* async function getMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const response = await fetch(url)
  const rawData = await response.json();
  return rawData;
} */

const apiData = {
  getMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const response = await fetch(url);
    const rawData = await response.json();
    return rawData;
  },
};

export default apiData;
