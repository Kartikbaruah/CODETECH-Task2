import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
        <link to={`/product/${props.id}`}></link><img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-price">
            <div className="item-price-new">
                ₹{props.new_price}
            </div>
            <div className="item-price-old">
                ₹{props.old_price}
            </div>
        </div>
    </div>
  )
}
