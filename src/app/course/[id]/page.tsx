'use client';

import React from 'react';
import {
	Container,
	Typography,
	List,
	Divider,
	CircularProgress,
} from '@mui/material';
import { VideoItemInterface } from '@/interfaces/videoItemInterface';
import VideoItem from '@/components/VideoItem';
import { useParams } from 'next/navigation';
import { useGetVideosByPlaylistId } from '@/hooks/useGetVideosByPlaylistId';
import { mockVideos } from '@/mocks/mockVideoItem';

const Course = () => {
	const { id } = useParams();
	const { data: videos, isLoading, error } = useGetVideosByPlaylistId(id[0]);
	const [videoItems, setVideoItems] = React.useState<VideoItemInterface[]>(
		[]
	);
	const [selectedVideoId, setSelectedVideoId] = React.useState<
		string | null
	>();

	React.useEffect(() => {
		if (videos) {
			setVideoItems(videos);
		} else if (error) {
			console.error(error);
			setVideoItems(mockVideos);
		}
	}, [videos, error]);

	React.useEffect(() => {
		setSelectedVideoId(videoItems[0]?.id);
	}, [videoItems]);

	const handleVideoClick = (videoId: string) => {
		setSelectedVideoId(videoId);
	};

	const selectedVideo = videoItems.find(
		(video) => video.id === selectedVideoId
	);

	return (
		<Container className="min-h-screen flex flex-col gap-5 my-5">
			{isLoading && !selectedVideo ? (
				<div className="h-screen w-full flex items-center justify-center">
					<CircularProgress />
				</div>
			) : (
				<div className="flex flex-col gap-4">
					<Typography variant="h4" gutterBottom>
						Assistindo ao vídeo - {selectedVideo?.title}
					</Typography>
					{selectedVideo && (
						<iframe
							width="100%"
							height="540"
							src={`https://www.youtube.com/embed/${selectedVideo.id}`}
							title={selectedVideo.title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					)}
					<Typography
						variant="h6"
						className="text-justify"
						gutterBottom
					>
						{selectedVideo?.description}
					</Typography>
					<Divider />
					<Typography variant="h5" gutterBottom>
						Conteúdo do curso
					</Typography>
					<List className="flex flex-col gap-2">
						{videoItems.map((video, index) => (
							<React.Fragment key={video.id}>
								<VideoItem
									video={video}
									index={index}
									onClick={handleVideoClick}
									isSelected={video.id === selectedVideoId}
								/>
							</React.Fragment>
						))}
					</List>
				</div>
			)}
		</Container>
	);
};

export default Course;
