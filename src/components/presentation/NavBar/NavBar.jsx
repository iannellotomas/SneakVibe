import { NavLink } from "react-router-dom";
import LogoButton from "../LogoButton/LogoButton";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export default function NavBar() {
	return (
		<nav className="nav">
			<div className="navLeft">
				<LogoButton />
			</div>
			<div className="navCenter">
				<NavLink
					to="/categoria/zapatillas"
					className="navLink">
					Zapatillas
				</NavLink>
				<NavLink
					to="/categoria/botines"
					className="navLink">
					Botines
				</NavLink>
				<NavLink
					to="/categoria/sandalias"
					className="navLink">
					Sandalias
				</NavLink>
			</div>
			<div className="navRight">
				<CartWidget />
			</div>
		</nav>
	);
}
