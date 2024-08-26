import { YoutubeMethods } from '@/services/routes/youtube';
import { useQuery } from '@tanstack/react-query';

export const useGetVideosByPlaylistId = (playlistId: string) => {
	const { getVideosByPlaylistId } = new YoutubeMethods();

	const data = useQuery({
		queryKey: ['playlistId', playlistId],
		queryFn: () => getVideosByPlaylistId(playlistId),
		enabled: !!playlistId,
	});

	return data;
};
