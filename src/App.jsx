import './App.css'
import {Provider} from "react-redux";
import store from "./redux/store.js";
import CakeContainer from "./components/cakeContainer.jsx";
import FlowerContainer from "./components/flowerContainer.jsx";
import UserContainer from "./components/userContainer.jsx";

function App() {
    return (
        <Provider store={store}>
            <div>
                {/*hey everyone!!*/}
                {/*<CakeContainer/>*/}
                {/*<hr/>*/}
                {/*<FlowerContainer/>*/}
                {/*<hr/>*/}
                <UserContainer/>
            </div>
        </Provider>
    )
}

export default App


// ** store : cake => 1. store , 2. action , 3. reducer