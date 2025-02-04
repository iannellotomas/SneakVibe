import { useParams } from "react-router-dom";
import { dataProducts } from "../../data/dataProducts";
import { motion } from "framer-motion";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
	const { id } = useParams();
	console.log(id);
	const product = dataProducts.find((item) => item.id == id);

	return (
		<section className="detailProduct">
			<motion.div
				className="image"
				layout
				layoutId={`product-${product.id}`}>
				<img
					src={product.image}
					alt={`Foto de ${product.title}`}
				/>
			</motion.div>
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
