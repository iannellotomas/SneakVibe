import { useEffect } from "react";
import "./Snackbar.css";

export default function Snackbar({ product, showSnackbar, setShowSnackbar }) {
	useEffect(() => {
		if (showSnackbar) {
			const timer = setTimeout(() => setShowSnackbar(false), 4000);
			return () => clearTimeout(timer);
		}
	}, [showSnackbar]);

	return (
		<div
			className={`snackbar ${showSnackbar ? "show" : ""}`}
			role="status"
			aria-live="polite">
			<div className="snackbarImage">
				<img
					src={product.image}
					alt={`Imagen del producto ${product.title}`}
				/>
				<span>
					<svg
						width="19"
						height="15"
						viewBox="0 0 19 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.61719 8.64328L6.18862 13.2147L17.6172 1.78613"
							stroke="white"
							strokeWidth="3.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</div>
			<span>
				<h3>Agregado al carrito</h3>
				<p>{product.title}</p>
			</span>
			<svg
				width="17"
				height="12"
				viewBox="0 0 17 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="polygonSnackbar">
				<path
					d="M7.05885 1.49769C7.84565 0.680025 9.15435 0.680024 9.94115 1.49769L16.0664 7.86325C17.2891 9.13386 16.3886 11.25 14.6253 11.25H2.37474C0.611419 11.25 -0.289058 9.13386 0.933585 7.86325L7.05885 1.49769Z"
					fill="#D9D9D9"
				/>
			</svg>
		</div>
	);
}
