import styles from "./home.module.scss";
import PropTypes from "prop-types";
import Card from "./Card/Card";

const Main = ({ onClick, arr, buttonMessage }) => {
	return (
		<div className={styles.cats}>
			<button onClick={onClick} className={styles.cats__btn}>
				{buttonMessage}
			</button>
			<div className={styles.cats__main}>
				{arr.map((cat) => (
					<Card
						key={cat.id}
						{...cat}
						url={cat.image && cat.image.url ? cat.image.url : "Cat"}
					/>
				))}
			</div>
		</div>
	);
};

Main.propTypes = {
	onClick: PropTypes.func,
	arr: PropTypes.array,
	buttonMessage: PropTypes.string,
};

export default Main;
