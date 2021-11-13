import React from 'react'
import { useLocation } from 'react-router'

export default function CartPage() {
    const location = useLocation()
    const qty =  location.search ?
                 location.search.split("=")[1] :
                 1
    return (
        <div>
            {qty}
        </div>
    )
}
