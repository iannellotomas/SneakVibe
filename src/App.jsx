import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/presentation/NavBar/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import Error404 from "./components/presentation/Error404/Error404";

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
					path="/categoria/:id"
					element={<ItemListContainer />}
				/>
				<Route
					path="/producto/:id"
					element={<ItemDetailContainer />}
				/>
				<Route
					path="*"
					element={<Error404 />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
