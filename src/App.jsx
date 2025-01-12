import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer
				title="¡Te damos la bienvenida!"
				description="Creado por Tomás Iannello"
			/>
		</>
	);
}

export default App;
