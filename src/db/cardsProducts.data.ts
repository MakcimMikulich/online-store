// import warmNest from '../../assets/card/dogs/warm-nest.png'
import warmNest from "../assets/Card/WarmNest.png";
import zealanda from "../assets/Card/zealanda.png";
import reflex from "../assets/Card/reflex.png";
import omegaGold from "../assets/Card/omegaGold.png";
import cowBoy from "../assets/Card/cowboy.png";
import ropeBall from "../assets/Card/roleBall.png";
import headBand from "../assets/Card/headband.png";
import petToy from "../assets/Card/petToy.png";
import { dogInfoType } from "./cardsDogs.data.ts";

export interface ICard {
	image: string;
	title: string;
	cardInfo: productInfoType | dogInfoType;
	price: string;
	promotion?: string;
}

export interface productInfoType {
	Product?: string;
	Size?: string;
}

export const ourProduct: ICard[] = [
	{
		image: zealanda,
		title: "Reflex Plus Adult Cat Food Salmon",
		cardInfo: { Product: "Dog Food", Size: "385gm" },
		price: "140.000 VND",
		promotion: "Free Toy & Free Shaker",
	},
	{
		image: reflex,
		title: "Reflex Plus Adult Cat Food Salmon",
		cardInfo: { Product: "Cat Food", Size: "1.5kg" },
		price: "165.000 VND",
		promotion: "Free Toy & Free Shaker",
	},
	{
		image: ropeBall,
		title: "Cat scratching ball toy kitten sisal rope ball",
		cardInfo: { Product: "Toy" },
		price: "1.100.000 VND",
		promotion: "Free Cat Food",
	},
	{
		image: warmNest,
		title: "Cute Pet Cat Warm Nest",
		cardInfo: { Product: "Toy" },
		price: "410.000 VND",
		promotion: "Free Cat Food",
	},
	{
		image: omegaGold,
		title: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
		cardInfo: { Product: "Dog Food", Size: "385gm" },
		price: "350.000 VND",
		promotion: "Free Toy & Free Shaker",
	},
	{
		image: cowBoy,
		title: "Costumes Fashion Pet Clother Cowboy Rider",
		cardInfo: { Product: "Costume", Size: "1.5kg" },
		price: "500.000 VND",
		promotion: "Free Toy & Free Shaker",
	},
	{
		image: headBand,
		title: "Costumes Chicken Drumsti ck Headband",
		cardInfo: { Product: "Costume" },
		price: "400.000 VND",
		promotion: "Free Cat Food",
	},
	{
		image: petToy,
		title: "Plush Pet Toy",
		cardInfo: { Product: "Toy" },
		price: "250.000 VND",
		promotion: "Free Food & Shaker",
	},
];
