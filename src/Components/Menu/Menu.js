import React, { useState } from "react";
import img from '../Mainpage/images/AM.avif'
import img2 from './Images/iconrate.png'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = ({ Api, fav, cart }) => {
    if (!Array.isArray(Api)) {
        return <p>No data available</p>;
    }
    return (
        <>
            {Api.map((item) => {
                const { id, name, image, price, category, discription, rating } = item
                return (
                    <div className="card" key={id}>
                        <div className="image-container">
                            <img src={`${process.env.PUBLIC_URL}/${image}`} alt="Menu Item" className="Menu_img" />
                        </div>
                        <div className="content-container">
                            <div className="button-container">
                                <button className="fav-button" onClick={() => fav(id)}>Add to Fav</button>
                                <div className="rating-container">
                                    <img src={img2} alt="Rating" className="rating" />
                                    <span>{rating}</span>
                                </div>
                            </div>
                            <h1 className="item-name">{name}</h1>
                            <p className="description">{discription}</p>
                            <h2 className="price">{`$ ${price}`}</h2>
                            <div className="button-container">
                                <Link to={`/menu/order/${id}`} className="order"><button className="order-button">Order Now</button></Link>
                                <button className="cart-button" onClick={() => cart(id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div >

                )
            })}
        </>
    )
}

export default Menu