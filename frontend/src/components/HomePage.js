import React, {useEffect} from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'
import ReactLoading from "react-loading"

export default function HomePage() {
    const productList = useSelector(state => state.productList)
    const {loading, products, error} = productList 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <main>
            {loading ? 
                (<div className="dFlex alignCenter">
                    <ReactLoading type="bubbles" color="#cccccc"/>
                    <h2>Loading</h2>
                </div>) :
                error ?
                (
                    <div className="danger">
                        {error}
                    </div>
                ):
                (
                    products.map(item => {
                            return (
                            <Link key={item.id} to={`product/${item.id}`}>
                                <Card 
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    category={item.category}
                                    image={item.image}
                                    rating={item.rating.rate}
                                    ratingCount = {item.rating.count}
                                />
                            </Link>
                            )
                        }
                    )
                )
            }
        </main>
    )
}
