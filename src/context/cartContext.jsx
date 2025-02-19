import { createContext, useState } from "react";

export const CartContext = createContext(false);

export default function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	// Agregar producto al carrito
	const addCartItem = (item, amount) => {
		setCartItems((prevItems) => [...prevItems, { ...item, amount }]);
	};

	// Agregar o quitar unidades del carrito
	const updateAmountCartItem = (itemId, newAmount) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId ? { ...item, amount: newAmount } : item
			)
		);
	};

	// Eliminar producto del carrito
	const removeCartItem = (itemId) => {
		setCartItems(cartItems.filter((item) => item.id !== itemId));
	};

	// Vaciar carrito
	const clearCart = () => {
		setCartItems([]);
	};

	// Obtener precio de todos los productos
	const getTotalPrice = () => {
		return cartItems.reduce((total, item) => total + item.price * item.amount, 0);
	};

	// Obtener cantidad de productos (incluyendo unidades c/u)
	const getAmountProducts = () => {
		return cartItems.reduce((total, item) => total + item.amount, 0);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				setCartItems,
				addCartItem,
				updateAmountCartItem,
				removeCartItem,
				clearCart,
				getTotalPrice,
				getAmountProducts,
			}}>
			{children}
		</CartContext.Provider>
	);
}
