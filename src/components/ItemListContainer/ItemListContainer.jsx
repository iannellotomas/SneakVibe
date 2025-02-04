import "./ItemListContainer.css";
import { dataProducts } from "../../data/dataProducts";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
	return (
		<main>
			{/* <h1>{title}</h1>
			<p>{description}</p> */}
			<section className="containerProducts">
				{dataProducts.map((item) => (
					<ItemList
						key={item.id}
						product={item}
					/>
				))}
			</section>
		</main>
	);
}
