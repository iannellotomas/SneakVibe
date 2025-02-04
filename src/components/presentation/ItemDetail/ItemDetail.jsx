import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function ItemDetail({ product }) {
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
				<h2>${product.price.toLocaleString("es")}</h2>
				<p>{product.description}</p>
				<span>
					<ItemCount stock={product.stock} />
					<span>{product.stock} unidades disponibles</span>
				</span>
				<ButtonComponent
					text="Agregar al carrito"
					iconName="cart"
					size="large"
				/>
			</div>
		</section>
	);
}
