import "./App.css";
import { useEffect } from "react";
import { fetchCats } from "./stores/catsReducer";
import { useDispatch } from "react-redux";
import Home from "./components/Home";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCats());
	}, []);

	return (
		<>
			<Home />
		</>
	);
}

export default App;
