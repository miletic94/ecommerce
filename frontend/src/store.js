import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import productDetailsReducer from "./reducers/productDetailsReducer"
import productListReducer from "./reducers/productListReducer"

const initialState = {}


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetailsList: productDetailsReducer
})
const store = createStore(
                rootReducer, 
                initialState, 
                composeEnhancer(applyMiddleware(thunk))
            )

export default store