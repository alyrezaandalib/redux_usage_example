import {BUY_CAKE} from "./cakeType.js";

export default function cakeAction(cake = 1) {
    return {
        type: BUY_CAKE,
        payload: cake
    }
}