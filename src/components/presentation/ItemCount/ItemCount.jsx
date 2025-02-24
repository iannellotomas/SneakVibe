import "./ItemCount.css";

export default function ItemCount({ stock, amount, setAmount }) {
	const handleAmount = (type) => {
		if (type == "-" && amount > 1) {
			setAmount(amount - 1);
		} else if (type == "+" && amount < stock) {
			setAmount(amount + 1);
		}
	};

	return (
		<div className="amountProducts">
			<button onClick={() => handleAmount("-")}>
				<svg
					width="14"
					height="2"
					viewBox="0 0 14 2"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13 1H7H1"
						stroke="black"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			</button>
			<span>{amount}</span>
			<button onClick={() => handleAmount("+")}>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13.5 7.5H7.5M7.5 7.5H1.5M7.5 7.5V1.5M7.5 7.5V13.5"
						stroke="black"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			</button>
		</div>
	);
}
