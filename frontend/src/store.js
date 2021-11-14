import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import productDetailsReducer from "./reducers/productDetailsReducer"
import productListReducer from "./reducers/productListReducer"
import cartReducer from "./reducers/cartReducer"

const initialState = {}


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetailsList: productDetailsReducer,
    shoppingCart: cartReducer
})
const store = createStore(
                rootReducer, 
                initialState, 
                composeEnhancer(applyMiddleware(thunk))
            )

export default store