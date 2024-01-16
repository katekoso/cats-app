import "./App.css";
import { useEffect } from "react";
import { fetchCats } from "./stores/catsSlice";
import { useDispatch } from "react-redux";
import Home from "./components/Home/Home";

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
