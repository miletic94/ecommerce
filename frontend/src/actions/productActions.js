import * as actions from "../constants/productConstants"
import Axios from "axios"

export const listProducts = () => async dispatch => {
        dispatch({
            type: actions.PRODUCT_LIST_REQUEST
        })
        try {
            const { data } = await Axios.get("/api/products")
            dispatch({
                type: actions.PRODUCT_LIST_SUCCESS,
                payload: {
                    products: data
                }
            })
        } catch (error) {
            dispatch({
                type: actions.PRODUCT_LIST_FAIL,
                payload: {
                    error
                }
            })
        }
    }