import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./ItemList.css";

export default function ProductCard({ product }) {
	return (
		<article className="productCard">
			<div className="image">
				<img
					src={product.image}
					alt={`Foto de ${product.title}`}
				/>
				<span className="category">{product.category}</span>
			</div>
			<div className="info">
				<h3>{product.title}</h3>
				<h4>${product.price.toLocaleString("es")}</h4>
				<ButtonComponent
					linkTo={`/producto/${product.id}`}
					text="Ver más detalles"
				/>
			</div>
		</article>
	);
}
