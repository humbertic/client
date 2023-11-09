import React from 'react'
import './restaurantCard.css'
import {AiFillStar,} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import {MdMenuBook} from 'react-icons/md'
import { Link } from 'react-router-dom'


export const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
      <div className="restaurant-details">
        <h2>{restaurant.name}</h2>
        <p style={{color:'orange'}} className='review'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <BsStarHalf className='start-icon large'/>
          <span style={{color:'#666'}}> 4.5 (5)</span>
        </p>
        <p className="restaurant-description">{restaurant.description}</p>
        <button className='btn-menu'>
          <Link to={"/menuRestaurants"}>
            View Menu 
          </Link>
          
          <MdMenuBook/></button>
      </div>
    </div>
  );
}


