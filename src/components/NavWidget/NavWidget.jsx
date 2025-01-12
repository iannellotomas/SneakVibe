import styles from "./NavWidget.module.css";
import UserImage from "../../assets/UserImage.png";

const icons = [
	{
		title: "cart",
		svg: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6.66667 13.3333L13.9333 12.7275C16.2075 12.5383 16.7175 12.0417 16.9692 9.77417L17.5 5M5 5H18.3333"
					stroke="#0F0A0A"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.00004 18.3333C5.92052 18.3333 6.66671 17.5871 6.66671 16.6667C6.66671 15.7462 5.92052 15 5.00004 15C4.07957 15 3.33337 15.7462 3.33337 16.6667C3.33337 17.5871 4.07957 18.3333 5.00004 18.3333Z"
					stroke="#0F0A0A"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.1667 18.3333C15.0871 18.3333 15.8333 17.5871 15.8333 16.6667C15.8333 15.7462 15.0871 15 14.1667 15C13.2462 15 12.5 15.7462 12.5 16.6667C12.5 17.5871 13.2462 18.3333 14.1667 18.3333Z"
					stroke="#0F0A0A"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6.66663 16.6667H12.5M1.66663 1.66669H2.47163C3.25913 1.66669 3.94496 2.18752 4.13579 2.92919L6.61663 12.5634C6.67817 12.8043 6.68389 13.0561 6.63335 13.2996C6.5828 13.5431 6.47733 13.7718 6.32496 13.9684L5.52579 15"
					stroke="#0F0A0A"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		title: "notification",
		svg: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M4.29834 9.57587C4.2375 10.7392 4.3075 11.9775 3.26834 12.7567C3.02942 12.9355 2.83555 13.1676 2.70216 13.4345C2.56877 13.7014 2.49955 13.9958 2.5 14.2942C2.5 15.125 3.15167 15.8334 4 15.8334H16C16.8483 15.8334 17.5 15.125 17.5 14.2942C17.5 13.6892 17.215 13.1192 16.7317 12.7567C15.6925 11.9775 15.7625 10.7392 15.7017 9.57587C15.6267 8.11427 14.9933 6.73728 13.9322 5.72928C12.8712 4.72128 11.4635 4.15924 10 4.15924C8.53648 4.15924 7.12885 4.72128 6.0678 5.72928C5.00675 6.73728 4.37333 8.11427 4.29834 9.57587Z"
					stroke="#0F0A0A"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.5 15.8334C12.5 16.4964 12.2366 17.1323 11.7678 17.6011C11.2989 18.07 10.663 18.3334 10 18.3334C9.33696 18.3334 8.70107 18.07 8.23223 17.6011C7.76339 17.1323 7.5 16.4964 7.5 15.8334M8.75 2.60419C8.75 3.29419 9.31 4.16669 10 4.16669C10.69 4.16669 11.25 3.29419 11.25 2.60419C11.25 1.91419 10.69 1.66669 10 1.66669C9.31 1.66669 8.75 1.91419 8.75 2.60419Z"
					stroke="#0F0A0A"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
];

export default function NavWidget({ text, type, hasDropdown = false, badge }) {
	const icon = icons.find((icon) => icon.title == type);
	console.log(icon);

	return (
		<button className={`${styles.userWidget} ${!text && styles.iconWidget}`}>
			{type == "user" ? (
				<img
					src={UserImage}
					alt="Foto de perfil"
				/>
			) : (
				icon.svg
			)}
			{text && <span>{text}</span>}
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
			{badge && <span className={styles.badge}>{badge}</span>}
		</button>
	);
}
