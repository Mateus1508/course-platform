import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import Carousel from './Carousel';
import { CardItemInterface } from '@/interfaces/cardItemInterface';
import { mockCardItems } from '@/mocks/mockCardItems';

interface Props {
	title: string;
	items?: CardItemInterface[];
	loading?: boolean;
}

const CarouselSection = ({ title, items, loading }: Props) => {
	const showMock = !items || items.length === 0;
	return (
		<section className="min-h-60 my-5 w-full">
			<Typography variant="h2" className="text-2xl">
				{title}
			</Typography>
			{loading ? (
				<div className="w-full h-full flex items-center justify-center">
					<CircularProgress />
				</div>
			) : showMock ? (
				<Carousel items={mockCardItems} />
			) : (
				<Carousel items={items || mockCardItems} />
			)}
		</section>
	);
};

export default CarouselSection;
