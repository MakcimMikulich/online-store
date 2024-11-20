// import React from "react";
import styles from "./Contact.module.scss";
import { Header } from "../../components";
// import bg from "../../assets/Contact/bg_contact.webp";
import prevImg from "../../assets/Contact/prev.jpg";
import clock from "../../assets/Contact/clock.svg";
import map from "../../assets/Contact/map.svg";
import mail from "../../assets/Contact/mail.svg";
import phone from "../../assets/Contact/phone.svg";
import house from "../../assets/Contact/house.svg";
import { Heading } from "../../ui";

const workingHours = [
	{
		day: "Mon - Fri",
		time: "10 am to 5pm CT",
	},
	{
		day: "Sat",
		time: "10 am to 4 pm CT",
	},
	{
		day: "Sun",
		time: "10 am to 5pm CT",
	},
];

const contactLinks = [
	{
		img: phone,
		link: "#",
		content: "+375 (29) 67-33-984",
	},
	{
		img: mail,
		link: "#",
		content: "24nika74@mail.ru",
	},
	{
		img: map,
		link: "#",
		content: "220114, Belarus, Minsk, ST Uchenie",
	},
];

export const Contact = () => {
	return (
		<div className={styles.contact}>
			<Header />
			<div className={styles.prevImg}>
				<img src={prevImg} alt="prev" />
			</div>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.content__info}>
						<div className={styles.info__title}>
							<Heading>
								<span>Contact with Monito</span>
							</Heading>
						</div>
						<div className={styles.info__desc}>
							<p>
								Discover a lifetime of love and joy with your perfect furry
								companion!
							</p>
							<p>
								At MeoWoff, we specialize in matching families with the ideal
								pet from the finest European catteries like AlbostarUA,
								BastettoUA, AnneMoore and more – all accredited by WCF
								International.
							</p>

							<p>Let us help you find your purrrrr-ty baby today!</p>
						</div>
						<div className={styles.info__contact}>
							{contactLinks.map((el, i) => (
								<div key={i}>
									<a href={el.link} className={styles.contact__item}>
										<img width={36} height={36} src={el.img} alt="icon" />
										<span>{el.content}</span>
									</a>
								</div>
							))}
						</div>
						<div className={styles.info__clock}>
							{workingHours.map((el, i) => (
								<div key={i} className={styles.clock__item}>
									<img src={clock} alt="clock" />
									<span>
										<strong>{el.day}:</strong> {el.time}
									</span>
								</div>
							))}
						</div>
						<div className={styles.info__note}>
							<img src={house} alt="icon" />
							<span>*Showroom by appointments only</span>
						</div>
					</div>
					<div className={styles.content__map}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d696.9212606431539!2d27.39137004166579!3d54.01778420570122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1732096937567!5m2!1sru!2sby"
							width="800"
							height="600"
							style={{ border: "0" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};
