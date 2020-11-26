const { combineReducers } = require("redux");
const { default: AuthReducer } = require("./AuthReducer");

const AllReducer = combineReducers({auth: AuthReducer});

export default AllReducer;