import { Link } from "react-router-dom";
import Logo from "../../../../public/Logo.png";
import "./LogoButton.css";

export default function LogoButton() {
	return (
		<Link
			to="/"
			className="logo">
			<img
				src={Logo}
				alt="Logo de SneakVibe"
			/>
		</Link>
	);
}
