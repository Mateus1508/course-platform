import { YoutubeMethods } from '@/services/routes/youtube';
import { OrderType } from '@/types/orderType';
import { useQuery } from '@tanstack/react-query';

export const useGetChannels = (query: string, order?: OrderType) => {
	const { getYouTubePlaylistsResults, getYouTubeChannelDetails } =
		new YoutubeMethods();

	const result = useQuery({
		queryKey: ['youtubeChannels', query, order],
		queryFn: async () => {
			const playlists = await getYouTubePlaylistsResults(query, order);

			const uniqueChannels = new Map<string, any>();

			await Promise.all(
				playlists.items.map(async (playlist: any) => {
					const channelId = playlist.snippet.channelId;
					if (!uniqueChannels.has(channelId)) {
						const channelDetails = await getYouTubeChannelDetails(
							channelId
						);
						uniqueChannels.set(channelId, {
							...playlist,
							channelThumbnail:
								channelDetails.thumbnails.high.url,
						});
					}
				})
			);

			return Array.from(uniqueChannels.values());
		},
		enabled: !!query,
	});

	return result;
};
