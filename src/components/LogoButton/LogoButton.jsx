import styles from "./LogoButton.module.css";
import Logo from "../../assets/Logo.png";

export default function LogoButton() {
	return (
		<button className={styles.logo}>
			<img
				src={Logo}
				alt="Logo de SneakVibe"
			/>
		</button>
	);
}
