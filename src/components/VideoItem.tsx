import React from 'react';
import {
	ListItemText,
	ListItemAvatar,
	Avatar,
	ListItemButton,
	Typography,
	ListItem,
} from '@mui/material';
import { VideoItemInterface } from '@/interfaces/videoItemInterface';

interface VideoItemProps {
	video: VideoItemInterface;
	index: number;
	isSelected: boolean;
	onClick: (videoId: string) => void;
}

const VideoItem = ({ video, onClick, index, isSelected }: VideoItemProps) => {
	return (
		<ListItem
			disablePadding
			className={`${
				isSelected ? 'border bg-blue-100' : ''
			} bg-blue-100 border-blue-800 rounded hover:bg-blue-200`}
		>
			<ListItemButton onClick={() => onClick(video.id)} className="gap-3">
				<Typography className="bg-blue-500 px-3 py-1 rounded-md text-white">
					{index + 1}
				</Typography>
				<ListItemAvatar>
					<Avatar variant="square" src={video.thumbnail} />
				</ListItemAvatar>
				<ListItemText primary={video.title} />
			</ListItemButton>
		</ListItem>
	);
};

export default VideoItem;
