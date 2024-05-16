import { productInfoType } from "../../db/cardsProducts.data.ts";
import styles from "./cardInfo.module.scss";
import { dogInfoType } from "../../db/cardsDogs.data.ts";

interface CardInfoProps {
	info: productInfoType | dogInfoType;
}

export const CardInfo = (props: CardInfoProps) => {
	const cardInfo = Object.entries(props.info);

	console.log(cardInfo);

	return (
		<div className={styles.cardInfoContainer}>
			{cardInfo.map((p, index) => {
				const isDot = (index + 1) % 2 === 0;
				const [name, value] = p;

				return (
					<div key={index} className={styles.wrapper__info}>
						{isDot && <span className={styles.dot}></span>}
						<p>
							<span className={styles.name}>{name}: </span>
							<span className={styles.value}>{value}</span>
						</p>
					</div>
				);
			})}
		</div>
	);
};
