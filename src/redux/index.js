import redux, { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import userReducer from './reducers/userReducer'
import globalReducer from './reducers/globalReducer'
import globaReducer from "./reducers/globalReducer";

const rootReducer = combineReducers({

    user : userReducer,
    global : globaReducer,

})

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState())
})

export default store