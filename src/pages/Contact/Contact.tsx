// import React from "react";
import styles from "./Contact.module.scss";
import { Header } from "../../components";
// import bg from "../../assets/Contact/bg_contact.webp";
import prevImg from "../../assets/Contact/prev.png";

export const Contact = () => {
	return (
		<div className={styles.contact}>
			<Header />
			<div className={styles.prevImg__wrapper}>
				<img src={prevImg} alt="prevImg" />
			</div>
			<div className={styles.background}></div>
		</div>
	);
};
