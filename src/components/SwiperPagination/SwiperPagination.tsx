import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperPagination.scss";

import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

interface SwiperPaginationProps {
	slides: any[];
}

export const SwiperPagination = ({ slides }: SwiperPaginationProps) => {
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				freeMode={true}
				pagination={{
					type: "progressbar",
					clickable: true,
				}}
				breakpoints={{
					1280: {
						slidesPerView: 5.5,
					},
					992: {
						slidesPerView: 4.5,
					},
					768: {
						slidesPerView: 3.5,
					},
					476: {
						slidesPerView: 2.5,
					},
					0: {
						slidesPerView: 1,
					},
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{slides.map((slide, i) => (
					<SwiperSlide key={i}>
						<img src={slide} alt="customer" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
