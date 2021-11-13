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

export const productDetails = (productId) => async dispatch => {
    dispatch({
        type: actions.PRODUCT_DETAILS_REQUEST
    })
    try {
        const { data } = await Axios.get(`/api/products/${productId}`)
        dispatch({
            type: actions.PRODUCT_DETAILS_SUCCESS,
            payload: {
                product: {...data}
            }
        })
    } catch (error) {
        dispatch({
            type: actions.PRODUCT_DETAILS_FAIL,
            payload: {
                error: error.message
            }
        })
    }
    

}