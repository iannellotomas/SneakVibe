import "./ItemList.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
	return (
		<article className="productCard">
			<motion.div
				className="image"
				layout
				layoutId={`product-${product.id}`}>
				<img
					src={product.image}
					alt={`Foto de ${product.title}`}
				/>
				<span className="category">{product.category}</span>
			</motion.div>
			<div className="info">
				<h3>{product.title}</h3>
				<h4>${product.price.toLocaleString("es")}</h4>
				<ButtonComponent
					linkTo={`/product/${product.id}`}
					text="Ver más detalles"
				/>
			</div>
		</article>
	);
}
