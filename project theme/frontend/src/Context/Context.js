import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.title === product.title);
            if (existingItem) {
                // If the product already exists in the cart, increase its quantity
                return prevItems.map((item) =>
                    item.title === product.title
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // If the product doesn't exist in the cart, add it with quantity 1
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // Function to remove a product from the cart
    const removeFromCart = (title) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};