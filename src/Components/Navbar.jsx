import React, { useState } from 'react';
import Cart from './Cart';

const Navbar = ({ cartItems, removeFromCart }) => {
    const [showCart, setShowCart] = useState(false);

    const handleOpenCart = () => {
        setShowCart(!showCart); 
    };

    const handleCloseCart = () => {
        setShowCart(false); 
    };

    return (
        <div>
            <nav className="nav flex relative justify-between items-center px-8 py-4 shadow-md bg-white w-full">
                <div className="text-red-400 text-3xl">
                    <h2>Online Shopping</h2>
                </div>

                <div className="hidden md:flex items-center space-x-48 justify-center px-44">
                    <ul className="flex space-x-6 text-lg font-medium text-gray-800">
                        <li><a href="#" className="hover:text-red-300 text-2xl">Home</a></li>
                    </ul>
                </div>

                <div className="flex space-x-5 px-10 relative">
                    <button className="text-white py-2 rounded-lg" onClick={handleOpenCart}>
                        Cart
                    </button>
                    <span className='absolute rounded-full leading-normal bg-red-300 h-6 w-6 -top-3 right-7'>{cartItems.length}</span>
                </div>
            </nav>
            {showCart && (
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} onClose={handleCloseCart} />
            )}
        </div>
    );
};

export default Navbar;
