import { YoutubeMethods } from '@/config/routes/youtube';
import { useQuery } from '@tanstack/react-query';

export const useSearchPlaylists = (searchQuery: string) => {
	const { getYouTubeSearchResults } = new YoutubeMethods();

	return useQuery({
		queryKey: ['youtubeSearchPlaylists', searchQuery],
		queryFn: () => getYouTubeSearchResults(searchQuery),
		enabled: !!searchQuery,
	});
};
