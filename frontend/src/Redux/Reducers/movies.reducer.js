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

// todo : trending movies reducer
export const TrendingMoviesReducer = (state = { trending: [] }, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES_REQUEST:
      return {
        loading: true,
      };
    case GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        trending: action.payload,
      };
    case GET_TRENDING_MOVIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// todo : new release movies or upcomming movies
export const NewReleaseReducer = (state = { upcomming: [] }, action) => {
  switch (action.type) {
    case NEW_RELEASE_MOVIES_REQUEST:
      return {
        loading: true,
      };
    case NEW_RELEASE_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        upcomming: action.payload,
      };
    case NEW_RELEASE_MOVIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// todo : popular movies
export const PopularMoviesReducer = (state = { popular: [] }, action) => {
  switch (action.type) {
    case POPULAR_MOVIES_REQUEST:
      return {
        loading: true,
      };
    case POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        popular: action.payload,
      };
    case POPULAR_MOVIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// todo : Top rated movies
export const TopRatedReducer = (state = { top20: [] }, action) => {
  switch (action.type) {
    case TOP_RATED_MOVIES_REQUEST:
      return {
        loading: true,
      };
    case TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        top20: action.payload,
      };
    case TOP_RATED_MOVIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// todo : all genres reducer
export const AllGenresReducer = (state = { genres: [] }, action) => {
  switch (action.type) {
    case GET_ALL_GENRES_REQUEST:
      return {
        loading: true,
      };
    case GET_ALL_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        genres: action.payload,
      };
    case GET_ALL_GENRES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
