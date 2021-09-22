import {
  series,
  loading,
  error,
  setSeriesData,
  completeLoadingSeries,
  favoriteSeries,
  removeFavoriteSeries,
} from "./types/tvTypes";
import apiData from "../apiData";

/* Get API */

export const getAllSeries = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const airingToday = await apiData.imdb.getDataArray(
      15,
      "tv",
      apiData.imdb.getList("tv", "airing_today", 1)
    );
    dispatch({
      type: series,
      payload: { airingToday },
    });

    const popular = await apiData.imdb.getDataArray(
      15,
      "tv",
      apiData.imdb.getList("tv", "popular", 1)
    );
    dispatch({
      type: series,
      payload: { popular },
    });

    const actionAdventure = await apiData.imdb.getDataArray(
      10,
      "tv",
      apiData.imdb.genres.getList("tv", "popularity.desc", 1, 10759)
    );
    dispatch({
      type: series,
      payload: { actionAdventure },
    });

    const animation = await apiData.imdb.getDataArray(
      10,
      "tv",
      apiData.imdb.genres.getList("tv", "popularity.desc", 1, 16)
    );
    dispatch({
      type: series,
      payload: { animation },
    });

    const documentary = await apiData.imdb.getDataArray(
      10,
      "tv",
      apiData.imdb.genres.getList("tv", "popularity.desc", 1, 99)
    );
    dispatch({
      type: series,
      payload: { documentary },
    });

    const scifi = await apiData.imdb.getDataArray(
      10,
      "tv",
      apiData.imdb.genres.getList("tv", "popularity.desc", 1, 10765)
    );
    dispatch({
      type: series,
      payload: { scifi },
    });

    const comedy = await apiData.imdb.getDataArray(
      10,
      "tv",
      apiData.imdb.genres.getList("tv", "popularity.desc", 1, 35)
    );
    dispatch({
      type: series,
      payload: { comedy },
    });

    dispatch({
      type: completeLoadingSeries,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

/* ---- */

export const setData = (payload) => async (dispatch) => {
  dispatch({
    type: setSeriesData,
    payload: payload,
  });
};

export const setFavorite = (payload) => ({
  type: favoriteSeries,
  payload,
});

export const setRemoveFavorite = (payload) => ({
  type: removeFavoriteSeries,
  payload,
});
