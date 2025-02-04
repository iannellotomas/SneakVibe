import "./CartWidget.css";

export default function CartWidget({ productsInCart }) {
	return (
		<button className="cartWidget">
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
			{productsInCart && <span className="badge">{productsInCart}</span>}
		</button>
	);
}
