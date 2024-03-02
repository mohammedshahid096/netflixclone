import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  AllGenresReducer,
  NewReleaseReducer,
  PopularMoviesReducer,
  TopRatedReducer,
  TrendingMoviesReducer,
} from "./Redux/Reducers/movies.reducer";

const Reducer = combineReducers({
  TrendingList: TrendingMoviesReducer,
  NewRelease: NewReleaseReducer,
  AllGenres: AllGenresReducer,
  Popular: PopularMoviesReducer,
  TopRated: TopRatedReducer,
});

const initialState = {};

const middleware = [thunk];

const Store = createStore(
  Reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
