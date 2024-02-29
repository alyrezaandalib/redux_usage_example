import {useDispatch, useSelector} from "react-redux";
import cakeAction from "../redux/cake/cakeAction.js";

export default function CakeContainer() {

    // ** accepts a function as its parameter : selector function
    // ** useSelector hook return whatever returns by selector function
    const store = useSelector((state) => state.cake)

    // ** returns a reference to the dispatch function in redux store
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of cakes : {store.numOfCake}</h2>
            <button onClick={() => dispatch(cakeAction())}>Buy cake</button>
            <button onClick={() => dispatch(cakeAction(2))}>Buy two cake</button>
        </div>
    )
}