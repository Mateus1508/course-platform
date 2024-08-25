import { YoutubeMethods } from '@/config/routes/youtube';
import { useQuery } from '@tanstack/react-query';

export const useGetVideoById = (accessToken: string, videoId: string) => {
	const { getYoutubeVideoById } = new YoutubeMethods();

	return useQuery({
		queryKey: ['youtubeVideo', videoId],
		queryFn: () => getYoutubeVideoById(videoId),
		enabled: !!videoId,
	});
};
