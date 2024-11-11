import { Header, SwiperPagination } from "../../components";
import { DogInfo } from "../../components/DogInfo/DogInfo.tsx";
import img from "../../assets/Dog/CustomersSlider.png";
import { SectionHeading } from "../../ui/index.ts";
import { useWindowSize } from "../../hooks/useWindowSize.ts";
import { useEffect, useState } from "react";

const slides = [img, img, img, img, img, img, img, img, img];

export const Dog = () => {
	const windowSize = useWindowSize();
	const mobileSize = 992;

	const [visibleHeader, setVisibleHeder] = useState(windowSize > mobileSize);

	useEffect(() => {
		setVisibleHeder(windowSize > mobileSize);
	}, [windowSize]);

	return (
		<>
			{visibleHeader && <Header />}
			<DogInfo />
			<section>
				<div className="container">
					<SectionHeading
						title="Our customers"
						note="How you feel your pets?"
						button={{ text: "View more", link: "about" }}
					/>
					<SwiperPagination slides={slides} />
				</div>
			</section>
		</>
	);
};
