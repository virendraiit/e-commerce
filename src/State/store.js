import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";


//Register respective reducers- auth, cart, order etc. with store
const rootReducers=combineReducers({
    auth:authReducer, //Now we can perform login & register. i.e. we can dispatch action in login and registeform
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))