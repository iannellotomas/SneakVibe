import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import ButtonComponent from "../../presentation/ButtonComponent/ButtonComponent";
import FormCheckout from "../../presentation/FormCheckout/FormCheckout";
import "./CheckoutContainer.css";

export default function CheckoutContainer() {
	const { cartItems, getTotalPrice, getAmountProducts } =
		useContext(CartContext);
	const [orderId, setOrderId] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		console.log("Orden de compra creada: ", orderId);
	}, [orderId]);

	// Redirigir al carrito si no hay productos agregados
	useEffect(() => {
		if (cartItems.length == 0) navigate("/carrito");
	}, []);

	return (
		<section className="checkout">
			<span>
				<ButtonComponent
					linkTo="/carrito"
					text="Volver"
					iconName="back"
					onlyIcon
				/>
				<h1>Ya casi son tuyos</h1>
			</span>
			<main className="checkoutMain">
				<FormCheckout setOrderId={setOrderId} />
				<div className="checkoutProducts">
					<h2>Tus productos</h2>
					<div className="checkoutList">
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="checkoutItem">
								<img
									src={item.image}
									alt={`Imagen del producto ${item.title}`}
								/>
								<span>
									<h3>{item.title}</h3>
									<span>
										x{item.amount} • ${item.price}
									</span>
								</span>
							</div>
						))}
					</div>
					<span>
						<div className="summaryRow">
							<span>Productos ({getAmountProducts()})</span>
							<span>$ {getTotalPrice().toLocaleString("es")}</span>
						</div>
						<div className="summaryRow">
							<span>Envíos ({getAmountProducts()})</span>
							<span>Gratis</span>
						</div>
						<hr />
						<div className="summaryRow primary">
							<span>Total</span>
							<span>$ {getTotalPrice().toLocaleString("es")}</span>
						</div>
					</span>
				</div>
			</main>

			{/* MODAL SUCCESS */}
			<div className={`checkoutSuccess ${orderId ? "show" : ""}`}>
				<div className="containerSuccess">
					<span className="successIcon">
						<svg
							width="50"
							height="52"
							viewBox="0 0 50 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M42.4393 37.5431C40.9712 37.552 39.5462 38.0399 38.3808 38.9326C37.2153 39.8253 36.3731 41.0742 35.9822 42.4893H18.3285C18.0102 41.3448 17.3963 40.3044 16.5485 39.4724C15.7007 38.6405 14.6488 38.0463 13.4986 37.7497V35.7351H43.7695C44.189 35.739 44.5964 35.5948 44.92 35.3279C45.2437 35.0609 45.4628 34.6884 45.5388 34.2758L49.103 15.5244C49.1526 15.2644 49.144 14.9966 49.0779 14.7403C49.0118 14.484 48.8898 14.2455 48.7208 14.0419C48.5517 13.8382 48.3397 13.6745 48.0999 13.5624C47.8601 13.4503 47.5985 13.3927 47.3338 13.3935H13.5632V4.96056C13.5613 4.57495 13.4344 4.20034 13.2016 3.89297C12.9687 3.5856 12.6424 3.36205 12.2717 3.25587L2.48278 0.130634C2.25217 0.0378681 2.0049 -0.00635432 1.75643 0.000735645C1.50797 0.00782561 1.26362 0.0660732 1.03868 0.171839C0.813738 0.277604 0.613042 0.428624 0.449089 0.615449C0.285136 0.802275 0.161458 1.0209 0.0857979 1.25767C0.0101383 1.49444 -0.0158945 1.74426 0.00934048 1.99155C0.0345755 2.23883 0.110559 2.47825 0.232486 2.69486C0.354413 2.91146 0.519679 3.1006 0.71799 3.25045C0.916302 3.40031 1.14339 3.50767 1.38506 3.56582L9.93426 6.27779V37.8272C8.81032 38.1621 7.79318 38.7844 6.98332 39.6326C6.17346 40.4809 5.59889 41.5257 5.31639 42.664C5.03389 43.8022 5.05325 44.9945 5.37251 46.1229C5.69177 47.2514 6.29989 48.2771 7.13683 49.0986C7.97377 49.9202 9.01058 50.5091 10.1448 50.8074C11.279 51.1056 12.4714 51.1028 13.6042 50.7992C14.737 50.4956 15.771 49.9018 16.604 49.0763C17.4371 48.2508 18.0404 47.2223 18.3543 46.0923H35.9693C36.3065 47.3033 36.9755 48.3958 37.9008 49.2466C38.8261 50.0974 39.9709 50.6726 41.2058 50.9071C42.4408 51.1416 43.7167 51.0262 44.8895 50.5738C46.0622 50.1214 47.0852 49.3502 47.8428 48.3471C48.6004 47.3441 49.0625 46.1492 49.1768 44.8974C49.2911 43.6456 49.0532 42.3867 48.4898 41.263C47.9265 40.1393 47.0602 39.1955 45.9887 38.5382C44.9173 37.8809 43.6834 37.5362 42.4264 37.5431H42.4393ZM21.7766 16.9966H26.9423V32.1321H21.7766V16.9966ZM30.5583 16.9966H35.7239V32.1321H30.5583V16.9966ZM42.3231 32.145H39.327V16.9966H45.203L42.3231 32.145ZM18.1735 16.9966V32.1321H13.5632V16.9966H18.1735ZM11.8714 47.4354C11.2482 47.4354 10.6389 47.2506 10.1208 46.9043C9.60257 46.5581 9.19868 46.066 8.96018 45.4902C8.72168 44.9144 8.65927 44.2808 8.78086 43.6696C8.90244 43.0583 9.20257 42.4969 9.64325 42.0562C10.0839 41.6155 10.6454 41.3154 11.2567 41.1938C11.8679 41.0722 12.5015 41.1346 13.0773 41.3731C13.653 41.6116 14.1452 42.0155 14.4914 42.5337C14.8376 43.0519 15.0225 43.6611 15.0225 44.2843C15.0225 44.7014 14.9397 45.1144 14.7789 45.4992C14.6182 45.8841 14.3826 46.2332 14.0859 46.5263C13.7891 46.8194 13.4372 47.0507 13.0504 47.2067C12.6636 47.3628 12.2497 47.4405 11.8327 47.4354H11.8714ZM42.4781 47.4354C41.8549 47.4354 41.2456 47.2506 40.7275 46.9043C40.2093 46.5581 39.8054 46.066 39.5669 45.4902C39.3284 44.9144 39.266 44.2808 39.3876 43.6696C39.5091 43.0583 39.8093 42.4969 40.2499 42.0562C40.6906 41.6155 41.2521 41.3154 41.8633 41.1938C42.4746 41.0722 43.1082 41.1346 43.6839 41.3731C44.2597 41.6116 44.7519 42.0155 45.0981 42.5337C45.4443 43.0519 45.6291 43.6611 45.6291 44.2843C45.6292 44.7014 45.5464 45.1144 45.3856 45.4992C45.2249 45.8841 44.9893 46.2332 44.6926 46.5263C44.3958 46.8194 44.0439 47.0507 43.6571 47.2067C43.2703 47.3628 42.8564 47.4405 42.4393 47.4354H42.4781Z"
								fill="#263238"
							/>
						</svg>
					</span>
					<h2>¡Listo! Tu compra fue un éxito</h2>
					<span className="order">Orden de compra: {orderId}</span>
					<p>
						En breve recibirás un correo con los detalles de tu pedido y el
						seguimiento. ¡Preparate para disfrutar de tus nuevas zapatillas con
						todo el estilo y comodidad que merecés!
					</p>
					<div className="successImages">
						{cartItems.map((item) => (
							<span
								key={item.id}
								className="successItem">
								<img
									src={item.image}
									alt={`Imagen del producto ${item.title}`}
								/>
							</span>
						))}
					</div>
					<ButtonComponent
						linkTo="/"
						text="Volver al inicio"
						iconName="home"
						size="large"
					/>
				</div>
			</div>
		</section>
	);
}
