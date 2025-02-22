import { Link } from "react-router-dom";
import "./ButtonComponent.css";

const icons = {
	home: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9 22L9.002 17.998C9.002 17.067 9.002 16.602 9.155 16.235C9.25551 15.9922 9.4029 15.7716 9.58872 15.5857C9.77455 15.3999 9.99518 15.2525 10.238 15.152C10.605 15 11.07 15 12 15C12.93 15 13.396 15 13.764 15.152C14.0068 15.2525 14.2274 15.3999 14.4133 15.5857C14.5991 15.7716 14.7465 15.9922 14.847 16.235C15 16.603 15 17.068 15 18V22"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.088 4.762L6.088 5.543C4.572 6.727 3.813 7.319 3.407 8.153C3 8.988 3 9.952 3 11.88V13.972C3 17.756 3 19.648 4.172 20.824C5.344 22 7.229 22 11 22H13C16.771 22 18.657 22 19.828 20.824C20.999 19.648 21 17.756 21 13.971V11.881C21 9.952 21 8.988 20.593 8.153C20.186 7.319 19.428 6.727 17.912 5.543L16.912 4.763C14.552 2.92 13.372 2 12 2C10.628 2 9.448 2.92 7.088 4.762Z"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	cart: (
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
	plus: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 4V20M4 12H20"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	trash: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.17 4.00001C9.3766 3.41448 9.75974 2.90744 10.2666 2.5488C10.7735 2.19015 11.3791 1.99756 12 1.99756C12.6209 1.99756 13.2265 2.19015 13.7334 2.5488C14.2403 2.90744 14.6234 3.41448 14.83 4.00001M20.5 6.00001H3.5M18.833 8.50001L18.373 15.4C18.196 18.054 18.108 19.381 17.243 20.19C16.378 20.999 15.047 21 12.387 21H11.613C8.953 21 7.622 21 6.757 20.19C5.892 19.381 5.803 18.054 5.627 15.4L5.167 8.50001M9.5 11L10 16M14.5 11L14 16"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	),
	back: (
		<svg
			width="27"
			height="18"
			viewBox="0 0 27 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M25.5 9H1.4082M1.4082 9L9.4082 1M1.4082 9L9.4082 17"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
};

export default function ButtonComponent({
	text,
	linkTo,
	onClick,
	size = "small",
	variant = "",
	iconName,
	completed,
	onlyIcon = false,
	isDisabled = false,
}) {
	const currentIcon = icons[iconName] || null;

	return linkTo ? (
		<Link
			to={linkTo}
			className={`buttonComponent ${size} ${variant} ${completed} ${
				onlyIcon ? "onlyIcon" : ""
			}`}>
			{currentIcon}
			{!onlyIcon && <span>{text}</span>}
		</Link>
	) : (
		<button
			onClick={onClick}
			className={`buttonComponent ${size} ${variant} ${completed} ${
				onlyIcon ? "onlyIcon" : ""
			}`}
			disabled={isDisabled}>
			{currentIcon}
			{!onlyIcon && <span>{text}</span>}
		</button>
	);
}
