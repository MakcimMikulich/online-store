import { Card } from "../Card/Card.tsx";
import styles from "./CardsField.module.scss";
import type { ICard } from "../../db/cardsProducts.data.ts";

interface CardsFieldProps {
	cards: ICard[];
}

export const CardsField = (props: CardsFieldProps) => {
	return (
		<div className={styles.cards__field}>
			{props.cards.map((card, index) => (
				<Card key={index} data={card} cardId={index} />
			))}
		</div>
	);
};
