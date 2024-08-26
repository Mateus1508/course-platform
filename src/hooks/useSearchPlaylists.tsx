import { YoutubeMethods } from '@/services/routes/youtube';
import { OrderType } from '@/types/orderType';
import { useQuery } from '@tanstack/react-query';

export const useSearchPlaylists = (searchQuery: string, order?: OrderType) => {
	const { getYouTubePlaylistsResults } = new YoutubeMethods();

	const result = useQuery({
		queryKey: ['youtubePlaylistsPlaylists', searchQuery, order],
		queryFn: async () =>
			await getYouTubePlaylistsResults(searchQuery, order),
		enabled: !!searchQuery,
	});

	return result;
};
