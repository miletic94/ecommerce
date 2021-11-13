import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
import { data } from '../data/data'
import ReactStars from "react-rating-stars-component"

export default function ProductPage() {
    const params = useParams()
    const navigate = useNavigate()
    const product = data.find(item => item.id === parseInt(params.id))
    const [qty, setQty] = useState(1)

    return (
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
                        value={product.rating.rate}
                        isHalf={true}
                    />
                    <div className="ratingCount">
                        {product.rating.count}
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
    )
}
