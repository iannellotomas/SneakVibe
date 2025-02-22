import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../firebase/firebase.js";
import ItemList from "../../presentation/ItemList/ItemList";
import Loader from "../../presentation/Loader/Loader";
import "./ItemListContainer.css";

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
			{loading ? (
				<Loader />
			) : (
				<section className="containerProducts">
					{products.map((item) => (
						<ItemList
							key={item.id}
							product={item}
						/>
					))}
				</section>
			)}
		</main>
	);
}
