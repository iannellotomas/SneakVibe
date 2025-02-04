import styles from "./LogoButton.module.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function LogoButton({ linkTo }) {
	return (
		<Link
			to={linkTo}
			className={styles.logo}>
			<img
				src={Logo}
				alt="Logo de SneakVibe"
			/>
		</Link>
	);
}
