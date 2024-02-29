import {BUY_FLOWER} from "./flowerType.js";

export default function flowerAction(cake = 1) {
    return {
        type: BUY_FLOWER,
        payload: cake
    }
}