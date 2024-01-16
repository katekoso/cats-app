import styles from "./home.module.scss";
import Card from "./Card/Card";

const Main = ({ onClick, arr, buttonMessage }) => {
	return (
		<div className={styles.cats}>
			<button onClick={onClick}>{buttonMessage}</button>
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

export default Main;
