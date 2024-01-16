import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./card.module.scss";
import likeNotClicked from "../../assets/like-svgrepo-com.svg";
import likeClicked from "../../assets/like-svgrepo-com-2.svg";
import Delete from "../../assets/cross-svgrepo-com-2.svg";
import { removeCat, likeCat, unlikeCat } from "../../stores/catsReducer";

const Card = ({ id, url, name, wikipedia_url, temperament }) => {
	const dispatch = useDispatch();
	const [liked, setLiked] = useState(false);

	const handleClick = () => {
		setLiked(!liked);
		if (liked === false) {
			dispatch(likeCat({ id }));
		} else {
			dispatch(unlikeCat({ id }));
		}
	};

	const getImage = () => (liked ? likeClicked : likeNotClicked);

	const image = getImage();

	return (
		<div className={styles.cat}>
			<div className={styles.imgContainer}>
				<img src={url} alt="Cat" className={styles.cat__img}></img>
			</div>
			<div className={styles.cat__info}>
				<h3>{name}</h3>
				<p>
					Wiki link: <a href={wikipedia_url}>{wikipedia_url}</a>
				</p>
				<p>Breed characteristics: {temperament}</p>
				<div className={styles.cat__buttons}>
					<button
						className={
							liked
								? styles.cat__LikeBtn + " " + styles.liked
								: styles.cat__LikeBtn + " " + styles.unliked
						}
						onClick={handleClick}
					>
						<img src={image} alt="Like" className={styles.btn__img}></img>
					</button>
					<button
						className={styles.cat__DeleteBtn}
						onClick={() => dispatch(removeCat({ id }))}
					>
						<img src={Delete} alt="Delete" className={styles.btn__img}></img>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
