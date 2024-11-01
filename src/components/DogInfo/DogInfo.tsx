import { useParams } from "react-router-dom";
import { ourDogs } from "../../db";
import styles from "./DogInfo.module.scss";
import { Button, Heading } from "../../ui";
import chat from "../../assets/Dog/chat.png";
import { SwiperDogs } from "../SwiperDogs/SwiperDogs.tsx";
import healthyIcon from "../../assets/Dog/healthyIcon.svg";
import garantIcon from "../../assets/Dog/garantIcon.svg";
import shareIcon from "../../assets/Dog/shareIcon.svg";
import fcIcon from "../../assets/Footer/Facebook.svg";
import instIcon from "../../assets/Footer/Instagram.svg";
import twitterIcon from "../../assets/Footer/Twitter.svg";
import youtubeIcon from "../../assets/Footer/Youtube.svg";

const iconLinks = [fcIcon, instIcon, twitterIcon, youtubeIcon];

export const DogInfo = () => {
	const { dogId } = useParams<{ dogId: string }>();

	const currentDog = ourDogs[+dogId! - 1];
	const dogName = currentDog.title.split(" ").slice(2).join(" ");

	console.log(currentDog);

	return (
		<div className="container">
			<section className={styles.dog__wrapper}>
				<div className={styles.slider}>
					<SwiperDogs />
					<div className={styles.slider__note}>
						<div className={styles.note__block}>
							<div>
								<img src={healthyIcon} alt={"healthyIcon"} />
							</div>
							<p>100% health guarantee for pets</p>
						</div>
						<div className={styles.note__block}>
							<div>
								<img src={garantIcon} alt={"garantIcon"} />
							</div>
							<p>100% guarantee of pet identification</p>
						</div>
					</div>
					<div className={styles.slider__share}>
						<div className={styles.share__item}>
							<img src={shareIcon} alt={"shareIcon"} />
							<span>Share:</span>
						</div>
						<div className={styles.share__link}>
							{iconLinks.map((link) => (
								<a href="">
									<img src={link} alt={"link"} />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className={styles.dog__info}>
					<p className={styles.dog__path__link}>path link</p>
					<p className={styles.dog__sku}>{currentDog.dogInfo?.[0].value}</p>
					<Heading>{dogName}</Heading>
					<p className={styles.dog__name}></p>
					<p className={styles.dog__price}>{currentDog.price}</p>

					<div className={styles.button__wrapper}>
						<Button type={"default"}>
							<span>Contact us</span>
						</Button>
						<Button type={"empty"}>
							<img src={chat} alt="button image" />
							<span>Chat with Monito</span>
						</Button>
					</div>

					{currentDog.dogInfo && (
						<div className={styles.dog__table}>
							{currentDog.dogInfo.map((i, index) => (
								<div key={index} className={styles.dog__table_row}>
									<p className={styles.dog__table_field}>{i.field}</p>
									<p className={styles.dog__table_value}>: {i.value}</p>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};
