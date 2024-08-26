import React, { useState } from 'react';
import CardItem from './CardItem';
import { CardItemInterface } from '@/interfaces/cardItemInterface';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Props {
	items?: CardItemInterface[];
}

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const CarouselItem = ({ items }: Props) => {
	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={3000}
			itemClass="flex justify-center"
			className="py-2"
		>
			{items?.map((item) => (
				<div key={item.id}>
					<CardItem
						title={item.title}
						description={item.description}
						imageUrl={item.imageUrl}
						altText={item.altText}
						id={item.id}
					/>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselItem;
