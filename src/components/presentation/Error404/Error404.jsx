import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./Error404.css";
import Fingerprint from "../../../../public/Fingerprint.png";

export default function () {
	return (
		<section className="pageNotFound">
			<img
				src={Fingerprint}
				alt="Icono de huella"
			/>
			<h1>¡Ups! No encontramos este zapato</h1>
			<p>
				Este camino no lleva a ningún lado, pero todavía podés encontrar tu
				calzado ideal volviendo al inicio.
			</p>
			<ButtonComponent
				linkTo="/"
				text="Volver al inicio"
				iconName="home"
				size="large"
			/>
		</section>
	);
}
