import { useState, useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { addOrder } from "../../../firebase/firebase.js";
import InputForm from "../InputForm/InputForm.jsx";
import ButtonComponent from "../ButtonComponent/ButtonComponent.jsx";
import "./FormCheckout.css";

export default function FormCheckout({ setOrderId }) {
	const { cartItems, getTotalPrice } =
			useContext(CartContext);
	
	const [checkoutData, setCheckoutData] = useState({
		fullname: "",
		phone: "",
		email: "",
	});
	const [errors, setErrors] = useState({
		fullname: false,
		phone: false,
		email: false,
	});

	// Actualizar el estado al cambiar los inputs
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCheckoutData({
			...checkoutData,
			[name]: value,
		});
	};

	// Crear orden de compra
	const handleSubmit = (e) => {
		e.preventDefault();

		if (isValidForm()) {
			const newOrder = {
				buyer: {
					name: checkoutData.fullname,
					email: checkoutData.email,
					phone: checkoutData.phone,
				},
				date: new Date(),
				items: cartItems,
				total: getTotalPrice(),
			};

			addOrder(newOrder).then((id) => setOrderId(id));

			// Resetear formulario
			setCheckoutData({
				fullname: "",
				phone: "",
				email: "",
			});
		}
	};

	// Verificar si el formulario es válido
	const isValidForm = () => {
		let isValid = false;

		const newErrors = {
			fullname: checkoutData.fullname.trim() === "",
			phone: checkoutData.phone.length < 10 || isNaN(checkoutData.phone),
			email:
				checkoutData.email.trim() === "" || !checkoutData.email.includes("@"),
		};

		setErrors(newErrors);
		isValid = !newErrors.fullname && !newErrors.phone && !newErrors.email;
		return isValid;
	};

	return (
		<form className="checkoutForm">
			<h2>Completá tus datos</h2>
			<span>
				<InputForm
					type="text"
					name="fullname"
					placeholder="Nombre"
					maxLength={30}
					value={checkoutData.fullname}
					onChange={handleChange}
					isValid={errors.fullname}
				/>
				<InputForm
					type="tel"
					name="phone"
					placeholder="Teléfono"
					maxLength={15}
					value={checkoutData.phone}
					onChange={handleChange}
					isValid={errors.phone}
				/>
			</span>
			<InputForm
				type="email"
				name="email"
				placeholder="Email"
				maxLength={50}
				value={checkoutData.email}
				onChange={handleChange}
				isValid={errors.email}
			/>
			<ButtonComponent
				onClick={handleSubmit}
				text="Confirmar compra"
				size="large"
			/>
		</form>
	);
}
