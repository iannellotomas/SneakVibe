import "./InputForm.css";

const errorMessages = {
	fullname: "Ingresa tu nombre completo",
	phone: "El teléfono debe tener al menos 10 números",
	email: 'Completá el email incluyendo "@"',
};

export default function InputForm({
	type = "text",
	name,
	placeholder,
	maxLength,
	onChange,
	value,
	isValid,
	isRequired = true,
}) {
	const currentErrorMessage = errorMessages[name];

	return (
		<div className="containerField">
			<label className="field">
				<input
					name={name}
					type={type}
					placeholder={name}
					maxLength={maxLength}
					autoComplete="on"
					required={isRequired ? true : null}
					onChange={(e) => onChange(e)}
					value={value}
				/>
				<span className="placeholder">{placeholder}</span>
				<span className="required">*</span>
			</label>
			<div className={`error ${isValid ? "show" : ""}`}>
				{currentErrorMessage}
			</div>
		</div>
	);
}
