import styles from "./NavBar.module.css";
import LogoButton from "../LogoButton/LogoButton";
import SearchBar from "../SearchBar/SearchBar";
import NavLink from "../NavLink/NavLink";
import NavWidget from "../NavWidget/NavWidget";

export default function NavBar() {
	const username = "Florencia";

	return (
		<nav className={styles.nav}>
			<div className={styles.navLeft}>
				<LogoButton />
				<SearchBar />
			</div>
			<div className={styles.navCenter}>
				<NavLink text="Novedades" />
				<NavLink
					text="Adultos"
					hasDropdown
				/>
				<NavLink
					text="Niños"
					hasDropdown
				/>
				<NavLink text="Ofertas" />
			</div>
			<div className={styles.navRight}>
				<NavWidget
					type="user"
					text={username}
					hasDropdown
				/>
				<NavWidget type="cart" badge={3} />
				<NavWidget type="notification" />
			</div>
		</nav>
	);
}
