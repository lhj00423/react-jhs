import { combineReducers } from "redux";
import food from "./food";
import logincheck from "./logincheck";
import special from './special';
import product from './product';


//루트 리듀서 
//리듀서 합치기 combineReducers({객체 형태로})
const rootReducer = combineReducers({logincheck : logincheck, special: special, food:food, product:product});

export default rootReducer;