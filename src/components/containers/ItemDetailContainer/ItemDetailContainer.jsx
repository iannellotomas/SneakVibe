import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleProduct } from "../../../firebase/firebase.js";
import ItemDetail from "../../presentation/ItemDetail/ItemDetail";
import Loader from "../../presentation/Loader/Loader";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getSingleProduct(id)
			.then((response) => setProduct(response))
			.finally(() => setLoading(false));
	}, []);

	return (
		<section className="detailProduct">
			{loading ? <Loader /> : <ItemDetail product={product} />}
		</section>
	);
}
