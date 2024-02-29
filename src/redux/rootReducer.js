import {combineReducers} from "redux";
import cakeReducer from "./cake/cakeReducer.js";
import flowerReducer from "./flower/flowerReducer.js";
import userReducer from "./user/userReducer.js";

const RootReducer = combineReducers({
    cake: cakeReducer,
    flower: flowerReducer,
    users: userReducer,
})

export default RootReducer