// components/CardItem.tsx
import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	CardMedia,
	CardActionArea,
} from '@mui/material';
import { useRouter } from 'next/navigation';

interface Props {
	title: string;
	description: string;
	imageUrl: string;
	altText: string;
	id: string;
}

const CardItem = ({ title, description, imageUrl, altText, id }: Props) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/course/${id}`);
	};

	return (
		<Card className="w-80 h-80">
			<CardActionArea onClick={handleClick}>
				<CardMedia
					component="img"
					className="h-3/4 w-full object-cover"
					image={imageUrl}
					alt={altText}
				/>
				<CardContent className="h-1/4 p-2 text-center">
					<Typography variant="h6">{title}</Typography>
					<Typography variant="body2">{description}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardItem;
