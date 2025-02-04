import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<ItemListContainer />}
				/>
				<Route
					path="/product/:id"
					element={<ItemDetailContainer />}
				/>
				{/* AGREGAR PATH * PARA ERROR 404 */}
			</Routes>
		</BrowserRouter>
	);
}
