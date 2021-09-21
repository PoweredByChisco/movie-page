import { combineReducers } from "redux"; /* Combinara los reducers que le pasemos como parametro */
import moviesReducer from "./moviesReducer";
import tvReducer from "./tvReducer";


export default combineReducers({
  moviesReducer,
  tvReducer
})
