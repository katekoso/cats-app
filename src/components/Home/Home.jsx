import { useState } from "react";
import { useSelector } from "react-redux";
import Main from "./Main";
import Loader from "../Loader/Loader";

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
			{loading && (
				<div>
					<Loader />
				</div>
			)}
			{error && <div>{error}</div>}
		</>
	);
};

export default Home;
