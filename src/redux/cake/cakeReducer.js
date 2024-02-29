import {BUY_CAKE} from "./cakeType.js";

const initialState = {
    numOfCake: 10
}
export default function cakeReducer(state = initialState, {type, payload = 1}) {
    switch (type) {
        case BUY_CAKE : {
            return {
                ...state,
                numOfCake: state.numOfCake - payload
            }
        }
        default :
            return state
    }
}