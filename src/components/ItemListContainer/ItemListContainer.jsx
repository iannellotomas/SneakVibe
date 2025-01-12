import styles from "./ItemListContainer.module.css";

export default function ItemListContainer({ title, description }) {
	return (
		<main>
			<h1>{title}</h1>
			<p>{description}</p>
		</main>
	);
}
