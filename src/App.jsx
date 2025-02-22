import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/presentation/NavBar/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import CartProvider from "./context/cartContext";
import CartContainer from "./components/containers/CartContainer/CartContainer";
import CheckoutContainer from "./components/containers/CheckoutContainer/CheckoutContainer";
import Error404 from "./components/presentation/Error404/Error404";

export default function App() {
	return (
		<BrowserRouter>
			<CartProvider>
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
						path="/carrito"
						element={<CartContainer />}
					/>
					<Route
						path="/checkout"
						element={<CheckoutContainer />}
					/>
					<Route
						path="*"
						element={<Error404 />}
					/>
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}
