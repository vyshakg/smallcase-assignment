import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux-reducers";

let Middleware = null;
if (process.env.NODE_ENV === "development") Middleware = composeWithDevTools(applyMiddleware(thunk));
else Middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, Middleware);

export default store;
