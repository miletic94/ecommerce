import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function Card(props) {

    return (
        <div key={props.id} className="card">
        <img className="imgMd" src={props.image} alt={props.title}/>

        <div className="horizontalPdSm verticalPdSm">
            <h2 className="productName">
                {props.title}
            </h2>
            <div className="cardProductInfo">
                <div className="dFlex alignCenter gapSm">
                    <ReactStars
                        classNames="rating" 
                        value={props.rating}
                        activeColor="#f3a847"
                        size={24}
                        edit={false}
                        isHalf={true}
                    />
                    <span className="ratingCount hoverSecondary">{props.ratingCount}</span>
                </div>
               
                <div className="price">
                    {`$${props.price}`}
                </div>
            </div>  
        </div>
    </div>
    )
}
