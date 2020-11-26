const { createStore } = require("redux");
const { default: AllReducer } = require("./reducers/AllReducers");

const initialState = {
    auth: {
        loggedIn: false,
        user: {}
    }
}

const store = createStore(
    AllReducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;