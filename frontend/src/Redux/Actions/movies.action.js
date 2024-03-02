import {
  GET_ALL_GENRES_FAIL,
  GET_ALL_GENRES_REQUEST,
  GET_ALL_GENRES_SUCCESS,
  GET_TRENDING_MOVIES_FAIL,
  GET_TRENDING_MOVIES_REQUEST,
  GET_TRENDING_MOVIES_SUCCESS,
  NEW_RELEASE_MOVIES_FAIL,
  NEW_RELEASE_MOVIES_REQUEST,
  NEW_RELEASE_MOVIES_SUCCESS,
  POPULAR_MOVIES_FAIL,
  POPULAR_MOVIES_REQUEST,
  POPULAR_MOVIES_SUCCESS,
  TOP_RATED_MOVIES_FAIL,
  TOP_RATED_MOVIES_REQUEST,
  TOP_RATED_MOVIES_SUCCESS,
} from "../Constants/movies.constant";
import { API_KEY, API_URL } from "../../utils/tmdb.config";
import axios from "axios";

// ?------------------------------------------
// todo : trending movies action
// ?------------------------------------------
export const TrendingListAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TRENDING_MOVIES_REQUEST });
    const {
      data: { results },
    } = await axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}`);

    dispatch({
      type: GET_TRENDING_MOVIES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      type: GET_TRENDING_MOVIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ?------------------------------------------
// todo : new release movies action
// ?------------------------------------------
export const NewReleaseAction = () => async (dispatch) => {
  try {
    dispatch({ type: NEW_RELEASE_MOVIES_REQUEST });
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}`);

    dispatch({
      type: NEW_RELEASE_MOVIES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      type: NEW_RELEASE_MOVIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ?------------------------------------------
// todo : popular movies action
// ?------------------------------------------
export const PopularMoviesAction = () => async (dispatch) => {
  try {
    dispatch({ type: POPULAR_MOVIES_REQUEST });
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);

    dispatch({
      type: POPULAR_MOVIES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      type: POPULAR_MOVIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ?------------------------------------------
// todo : top rated movies action
// ?------------------------------------------
export const TopRatedMoviesAction = () => async (dispatch) => {
  try {
    dispatch({ type: TOP_RATED_MOVIES_REQUEST });
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}`);

    dispatch({
      type: TOP_RATED_MOVIES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      type: TOP_RATED_MOVIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ?------------------------------------------
// todo : getting all the genres
// ?------------------------------------------
export const GetGenresAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_GENRES_REQUEST });
    const { data } = await axios.get(
      `${API_URL}/genre/movie/list?api_key=${API_KEY}`
    );

    dispatch({
      type: GET_ALL_GENRES_SUCCESS,
      payload: data.genres,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_GENRES_FAIL,
      payload: error.response.data.message,
    });
  }
};
