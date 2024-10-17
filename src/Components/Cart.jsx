import React from 'react';

const Cart = ({ cartItems, onClose, removeFromCart }) => {
    const handleRemoveItem = (productId) => {
        removeFromCart(productId);
    };

        const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-2/3 max-w-4xl rounded-lg p-6 shadow-lg relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">Close</button>
                <h3 className='text-red-800 mb-4'>Total Price: ${calculateTotalPrice()}</h3>
                <h2 className="text-2xl font-semibold mb-4 text-gray-500">Your Cart</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-auto max-h-96">
                {cartItems.length > 0 ? (
                    cartItems.map((product) => (
                        <div key={product.id} className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-2 w-56">
                            <img src={product.image} alt={product.title} className="w-24 h-24 object-contain mb-2" />
                            <div className='w-40 text-center'>
                                <p className="truncate font-semibold mb-1 overflow-hidden whitespace-nowrap text-gray-700">{product.title}</p>
                                <p className="text-gray-700">${product.price}</p>
                                <button 
                                    onClick={() => handleRemoveItem(product.id)} 
                                    className="text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
