import "./CartContainer.css";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import ItemList from "../../presentation/ItemList/ItemList";
import ButtonComponent from "../../presentation/ButtonComponent/ButtonComponent";

export default function CartContainer() {
	const { cartItems, clearCart, getTotalPrice, getAmountProducts } =
		useContext(CartContext);

	return (
		<section className="cartSection">
			<header>
				<h1>Tu carrito de compras</h1>
				{cartItems.length > 0 && (
					<ButtonComponent
						onClick={clearCart}
						text="Vaciar carrito"
						iconName="trash"
						variant="secondary"
					/>
				)}
			</header>
			{cartItems.length == 0 ? (
				<div className="cartEmpty">
					<h2>Aún no hay nada aquí</h2>
					<p>
						¿Unas zapatillas nuevas? ¿Unas medias a juego? Tu estilo te espera
						en nuestra tienda.
					</p>
					<ButtonComponent
						linkTo="/"
						text="Agregar productos"
						iconName="plus"
						size="large"
					/>
				</div>
			) : (
				<main className="cartDetails">
					<div className="cartList">
						<ButtonComponent
							linkTo="/"
							text="Agregar productos"
							iconName="plus"
							variant="secondary"
						/>
						{cartItems.map((item, index) => (
							<ItemList
								key={index}
								product={item}
								variant="cart"
							/>
						))}
					</div>
					<div className="cartSummary">
						<h2>Resumen</h2>
						<div className="summaryRow">
							<span>Productos ({getAmountProducts()})</span>
							<span>$ {getTotalPrice().toLocaleString("es")}</span>
						</div>
						<div className="summaryRow">
							<span>Envíos ({getAmountProducts()})</span>
							<span>Gratis</span>
						</div>
						<hr />
						<div className="summaryRow primary">
							<span>Total</span>
							<span>$ {getTotalPrice().toLocaleString("es")}</span>
						</div>
						<ButtonComponent
							linkTo="/checkout"
							text="Finalizar compra"
							size="large"
						/>
					</div>
				</main>
			)}
		</section>
	);
}
