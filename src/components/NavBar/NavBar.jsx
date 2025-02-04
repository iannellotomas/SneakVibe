import styles from "./NavBar.module.css";
import LogoButton from "../LogoButton/LogoButton";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.navLeft}>
				<LogoButton linkTo="/" />
			</div>
			<div className={styles.navCenter}>
				<ButtonComponent
					type="link"
					text="Zapatillas"
				/>
				<ButtonComponent
					type="link"
					text="Botines"
				/>
				<ButtonComponent
					type="link"
					text="Sandalias"
				/>
			</div>
			<div className={styles.navRight}>
				<CartWidget productsInCart={3} />
			</div>
		</nav>
	);
}
