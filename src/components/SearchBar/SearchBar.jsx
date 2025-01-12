import styles from "./SearchBar.module.css";

export default function NavBar() {
	return (
		<label className={styles.search}>
			<svg
				width="21"
				height="20"
				viewBox="0 0 21 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M14.9541 14.5834L18.7041 18.3334M17.0374 9.16669C17.0374 7.17756 16.2472 5.26991 14.8407 3.86339C13.4342 2.45686 11.5265 1.66669 9.53741 1.66669C7.54829 1.66669 5.64064 2.45686 4.23411 3.86339C2.82759 5.26991 2.03741 7.17756 2.03741 9.16669C2.03741 11.1558 2.82759 13.0635 4.23411 14.47C5.64064 15.8765 7.54829 16.6667 9.53741 16.6667C11.5265 16.6667 13.4342 15.8765 14.8407 14.47C16.2472 13.0635 17.0374 11.1558 17.0374 9.16669Z"
					stroke="#0F0A0A"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<input
				className={styles.field}
				placeholder="Buscar"
			/>
		</label>
	);
}
