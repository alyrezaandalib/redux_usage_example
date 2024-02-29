import {useDispatch, useSelector} from "react-redux";
import cakeAction from "../redux/cake/cakeAction.js";
import flowerAction from "../redux/flower/flowerAction.js";

export default function FlowerContainer() {

    // ** accepts a function as its parameter : selector function
    // ** useSelector hook return whatever returns by selector function
    const store = useSelector((state) => state.flower)

    // ** returns a reference to the dispatch function in redux store
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of flowers : {store.numOfFlower}</h2>
            <button onClick={() => dispatch(flowerAction())}>Buy cake</button>
        </div>
    )
}