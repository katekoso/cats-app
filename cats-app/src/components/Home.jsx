import styles from "./home.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";
import Main from "./Main";

const Home = () => {
	const [showLiked, setShowLiked] = useState(false);
	const { cats, loading, error, favourites } = useSelector(
		(state) => state.cats
	);

	const handleClick = () => {
		setShowLiked(!showLiked);
	};

	return (
		<>
			{loading && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{showLiked ? (
				<Main
					onClick={handleClick}
					arr={favourites}
					buttonMessage="На главную"
				/>
			) : (
				<Main
					onClick={handleClick}
					arr={cats}
					buttonMessage="Вам понравилось"
				/>
			)}
		</>
	);
};

export default Home;
