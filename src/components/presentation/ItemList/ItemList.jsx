import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemList.css";

export default function ItemList({ product, variant = "" }) {
	const { removeCartItem, updateAmountCartItem } = useContext(CartContext);

	const handleUpdateAmount = (newAmount) => {
		updateAmountCartItem(product.id, newAmount);
	};

	return (
		<article className={`productCard ${variant}`}>
			<div className="image">
				<img
					src={product.image}
					alt={`Foto de ${product.title}`}
				/>
				<span className="category">{product.category}</span>
			</div>
			<div className="info">
				<span className="itemHead">
					<span>
						<h3>{product.title}</h3>
						<h4>$ {product.price.toLocaleString("es")}</h4>
					</span>
					{variant == "cart" && (
						<span>
							<ItemCount
								amount={product.amount}
								setAmount={handleUpdateAmount}
								stock={product.stock}
							/>
							<span className="itemStock">
								{product.stock} unidades disponibles
							</span>
						</span>
					)}
				</span>
				<span className="itemCta">
					<ButtonComponent
						linkTo={`/producto/${product.id}`}
						text="Ver más detalles"
					/>
					{variant == "cart" && (
						<ButtonComponent
							onClick={() => removeCartItem(product.id)}
							text="Eliminar"
							iconName="trash"
							variant="secondary"
						/>
					)}
				</span>
			</div>
		</article>
	);
}
