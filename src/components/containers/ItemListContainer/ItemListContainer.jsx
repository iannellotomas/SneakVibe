import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../helpers/asyncMock";
import "./ItemListContainer.css";
import ItemList from "../../presentation/ItemList/ItemList";

export default function ItemListContainer() {
	const { id: category } = useParams();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		getProducts(category)
			.then((response) => setProducts(response))
			.finally(() => setLoading(false));
	}, [category]);

	return (
		<main>
			{loading ? <h3 className="loader">Cargando...</h3> : null}
			<section className="containerProducts">
				{products.map((item) => (
					<ItemList
						key={item.id}
						product={item}
					/>
				))}
			</section>
		</main>
	);
}
