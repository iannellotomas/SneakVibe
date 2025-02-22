import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	doc,
	addDoc,
	getDoc,
	getDocs,
	where,
	query,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDmBLl6J5gi5AowNdmJZOdSPZy3dUCrgE8",
	authDomain: "sneack-vibe.firebaseapp.com",
	projectId: "sneack-vibe",
	storageBucket: "sneack-vibe.firebasestorage.app",
	messagingSenderId: "908784670045",
	appId: "1:908784670045:web:048f0c3a8b83ef8141c4b4",
	measurementId: "G-CS3RN97SFQ",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Obtener productos desde Firestore
export async function getProducts(category) {
	try {
		let filteredQuery = category
			? query(collection(db, "products"), where("category", "==", category))
			: collection(db, "products");

		const querySnapshot = await getDocs(filteredQuery);

		if (querySnapshot.size != 0) {
			return querySnapshot.docs.map((docu) => ({
				id: docu.id,
				...docu.data(),
			}));
		} else {
			console.log("No hay productos");
			return [];
		}
	} catch (error) {
		console.error("Error al obtener los productos: ", error);
		return [];
	}
}

// Obtener un producto específico desde Firestore
export async function getSingleProduct(productId) {
	const documentRef = doc(db, "products", productId);

	try {
		const snapshot = await getDoc(documentRef);

		if (snapshot.exists()) {
			return { id: snapshot.id, ...snapshot.data() };
		} else {
			console.log("Este producto no existe");
		}
	} catch {
		console.log("Error al obtener el producto: ", error);
	}
}

// Agregar orden de compra a firestore
export async function addOrder(order) {
	const ordersCollection = collection(db, "orders");
	try {
		const docRef = await addDoc(ordersCollection, order);
		return docRef.id;
	} catch (error) {
		console.error("Error al agregar el documento nuevo ", error);
	}
}
