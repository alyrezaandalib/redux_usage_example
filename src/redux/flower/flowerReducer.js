import {BUY_FLOWER} from "./flowerType.js";

const initialState = {
    numOfFlower: 20
}
export default function flowerReducer(state = initialState, {type, payload = 1}) {
    switch (type) {
        case BUY_FLOWER : {
            return {
                ...state,
                numOfFlower: state.numOfFlower - payload
            }
        }
        default :
            return state
    }
}