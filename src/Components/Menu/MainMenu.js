import React, { useState } from "react";
import APIMenu from './Api'
import Menu from './Menu'
import './cart.css'


const MainMenu = () => {
    const [menulist, setmenu] = useState(APIMenu)
    const Sort = (item) => {
        const update = APIMenu.filter((x) => {
            if (item == 'All') {
                return x
            }
            else {
                return item == x.category
            }
        })
        setmenu(update)
    }
    function fav(item) {
        const main = APIMenu.map((x) => {
            if (x.id == item) {
                if (x.isfav == true) {
                    x.isfav = false
                }
                else {
                    x.isfav = true
                }
            }
        })
    }
    function cart(item) {
        const main = APIMenu.map((x) => {
            if (x.id == item) {
                if (x.cart == true) {
                    x.cart = false
                }
                else {
                    x.cart = true
                }
            }
        })
    }
    function Cartitem() {
        const m = APIMenu.filter((item) => item.cart)
        setmenu(m)
    }
    function favitem() {
        const m = APIMenu.filter((item) => item.isfav)
        setmenu(m)
    }
    return (
        <>
            <div className="button">
                <div className="btn_but">
                    <h1>Check Out</h1>
                    <h2>Menu</h2>
                </div>
                <div>
                    <button className="menu-button" onClick={() => Sort('All')}>All</button>
                    <button className="menu-button" onClick={() => Sort('Stater')}>Stater</button>
                    <button className="menu-button" onClick={() => Sort('Main')}>Main</button>
                    <button className="menu-button" onClick={() => Sort('Dessert')}>Dessert</button>
                    <button className="menu-button cart-button" onClick={() => Cartitem()}>Cart</button>
                    <button className="menu-button favorite-button" onClick={() => favitem()}>Favorite</button>
                </div>
            </div>

            <Menu Api={menulist} fav={fav} cart={cart} />
        </>
    )
}

export default MainMenu