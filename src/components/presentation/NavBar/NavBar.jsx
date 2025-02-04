import { Link, useLocation } from "react-router-dom";
import LogoButton from "../LogoButton/LogoButton";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export default function NavBar() {
	const location = useLocation();
	// Indicar link activo
	const isLinkActive = (linkName) => {
		return location.pathname === `/categoria/${linkName}`;
	};

	return (
		<nav className="nav">
			<div className="navLeft">
				<LogoButton />
			</div>
			<div className="navCenter">
				<Link
					to="/categoria/zapatillas"
					className={`navLink ${isLinkActive("zapatillas") ? "active" : ""}`}>
					Zapatillas
				</Link>
				<Link
					to="/categoria/botines"
					className={`navLink ${isLinkActive("botines") ? "active" : ""}`}>
					Botines
				</Link>
				<Link
					to="/categoria/sandalias"
					className={`navLink ${isLinkActive("sandalias") ? "active" : ""}`}>
					Sandalias
				</Link>
			</div>
			<div className="navRight">
				<CartWidget productsInCart={3} />
			</div>
		</nav>
	);
}
