import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component"
import {useSelector, useDispatch } from "react-redux"
import { productDetails } from '../actions/productActions';
import ReactLoading from "react-loading"

export default function ProductPage() {
    const params = useParams()
    const navigate = useNavigate()
    const data = useSelector(state => state.productDetailsList)
    const {loading, product, error} = data

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productDetails(params.id))

    }, [dispatch, params.id])
    return (
        <main>
            {loading ?
                (<ReactLoading type="bubbles" color="#cccccc"/>) :
            error ? 
            (
                <div className="danger">
                    {error}
                </div>
            ) :
            <div className="product">
                <img className="imgLg" src={product.image} alt={product.title} />
                <div className="productText">
                    <h2 className="productName">{product.title}</h2>
                    <div className="ratingRow">
                    <ReactStars
                            classNames="rating"
                            activeColor="#f3a847"
                            size={24}
                            edit={false}
                            value={product.rating ? product.rating.rate : 0}
                            isHalf={true}
                        />
                        <div className="ratingCount">
                            {product.rating ? product.rating.count : 0}
                        </div>
            
                    </div>
                    <p className="description">
                        {product.description}
                    </p>
                    <div className="putInCartAction">
                        <div className="selectionRow">
                            <select
                                name="quantity"
                                className="quantity"
                                onChange={(e) => setQty(e.target.value)}
                            >
                                {[...Array(product.available).keys()].map(num => {
                                    return <option key={num+1} value={(num+1).toString()}>Qty: {num+1}</option>
                                })}
                            </select>
                            <div className="price">
                                {`$${product.price}`}
                            </div>
                        </div>
            
            
                        <button
                            className="btnPrimary brightnessLower"
                            onClick={() => {navigate(`/cart/${product.id}?qty=${qty}`)}}
                        >
                            Add to Cart
                        </button>
                    </div>
            
                </div>
            </div>
        }
        </main>
    )
}
