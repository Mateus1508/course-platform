import api from '../apiConfig';

export class YoutubeMethods {
	getYouTubeSearchResults = async (query: string) => {
		const response = await api.get(`/search`, {
			params: {
				part: 'snippet',
				q: query,
				type: 'playlist',
				maxResults: 10,
			},
		});
		return response.data;
	};

	getYoutubeVideoById = async (videoId: string) => {
		const response = await api.get('/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				id: videoId,
			},
		});
		return response.data;
	};
}
