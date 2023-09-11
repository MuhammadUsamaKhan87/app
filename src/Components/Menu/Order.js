import React, { useState, useEffect } from "react";
import './Menu.css'
import { useParams } from 'react-router-dom';
import Menu from './Api'

const Order = () => {
    const { id } = useParams();
    const [menuItem, setMenuItem] = useState(null);

    useEffect(() => {
        const findItem = Menu.find((item) => item.id == id);

        if (findItem) {
            setMenuItem(findItem);
        }
    }, [id]);

    return (
        <div>
            {menuItem ? (
                <div className="Card card1">
                    <div className="image-container">
                        <img src={`${process.env.PUBLIC_URL}/${menuItem.image}`} alt="Menu Item" className="Menu_img" />
                    </div>
                    <div className="content-container">
                        <button className="fav-button">Add to Fav</button>
                        <h1 className="item-name">{menuItem.name}</h1>
                        <p className="description">{menuItem.discription}</p> {/* Use menuItem.discription */}
                        <h2 className="price">{`$ ${menuItem.price}`}</h2>
                        <button className="cart-button">Buy Now</button>
                    </div>
                </div>
            ) : (
                <div>Item is Not found</div>
            )}
        </div>
    );
}

export default Order;
