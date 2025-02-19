import { useContext, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Snackbar from "../Snackbar/Snackbar";
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
	const { cartItems, addCartItem } = useContext(CartContext);
	const [amountItems, setAmountItems] = useState(1);
	
	const isItemInCart = cartItems.some((item) => item.id === product.id);
	const [showSnackbar, setShowSnackbar] = useState(false);

	const handleAddToCart = () => {
		if (!isItemInCart) addCartItem(product, amountItems);
		setShowSnackbar(true);
	};

	return (
		<section className="itemDetail">
			<div className="image">
				<img
					src={product.image}
					alt={`Foto de ${product.title}`}
				/>
			</div>
			<div className="info">
				<h3 className="breadcrumbs">Inicio / {product.category}</h3>
				<h1>{product.title}</h1>
				<h2>$ {product.price.toLocaleString("es")}</h2>
				<p>{product.description}</p>
				{!isItemInCart && (
					<>
						{product.stock === 0 ? (
							<span className="errorText">No hay unidades disponibles</span>
						) : (
							<span>
								<ItemCount
									stock={product.stock}
									amount={amountItems}
									setAmount={setAmountItems}
								/>
								<span>{product.stock} unidades disponibles</span>
							</span>
						)}
					</>
				)}
				<ButtonComponent
					onClick={handleAddToCart}
					linkTo={isItemInCart ? "/carrito" : null}
					text={!isItemInCart ? "Agregar al carrito" : "Ver en carrito"}
					iconName="cart"
					size="large"
					completed={isItemInCart ? "completed" : null}
					isDisabled={product.stock == 0 ? true : false}
				/>
			</div>
			<Snackbar
				product={product}
				showSnackbar={showSnackbar}
				setShowSnackbar={setShowSnackbar}
			/>
		</section>
	);
}
