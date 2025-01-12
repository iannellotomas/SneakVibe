import styles from "./NavLink.module.css";

export default function NavLink({ text, hasDropdown = false }) {
	return (
		<a
			href="#"
			className={styles.navLink}>
			<span>{text}</span>
			{hasDropdown && (
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 6C12 6 9.054 10 8 10C6.946 10 4 6 4 6"
						stroke="#0F0A0A"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</a>
	);
}
