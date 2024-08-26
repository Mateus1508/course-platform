import { OrderType } from '@/types/orderType';
import api from '../apiConfig';

export class YoutubeMethods {
	getYouTubePlaylistsResults = async (query: string, order?: OrderType) => {
		try {
			const response = await api.get(`/search`, {
				params: {
					part: 'snippet',
					q: query,
					type: 'playlist',
					maxResults: 5,
					order: order,
				},
			});

			if (response.status !== 200) {
				throw new Error(
					`Erro ao buscar playlists: ${response.statusText}`
				);
			}

			const playlist = response.data?.items.map((item: any) => ({
				id: item.id.playlistId,
				title: item.snippet.title,
				description: item.snippet.description,
				imageUrl: item.snippet.thumbnails.high.url,
				altText: item.snippet.title,
			}));

			return playlist;
		} catch (error: any) {
			console.error(
				'Falha ao buscar playlists do YouTube:',
				error.message || error
			);
			throw error;
		}
	};

	getYouTubeChannelDetails = async (channelId: string) => {
		try {
			const response = await api.get(`/channels`, {
				params: {
					part: 'snippet',
					id: channelId,
				},
			});

			if (response.status !== 200) {
				throw new Error(
					`Erro ao buscar detalhes do canal: ${response.statusText}`
				);
			}

			const channels = response.data?.items.map((item: any) => ({
				id: item.id,
				title: item.snippet.title,
				description: item.snippet.description,
				imageUrl: item.snippet.thumbnails.high.url,
				altText: item.snippet.title,
			}));

			return channels;
		} catch (error: any) {
			console.error(
				'Falha ao buscar detalhes do canal do YouTube:',
				error.message || error
			);
			throw error;
		}
	};

	getVideosByPlaylistId = async (playlistId: string) => {
		try {
			const response = await api.get('/playlistItems', {
				params: {
					part: 'snippet',
					playlistId: playlistId,
					maxResults: 10,
				},
			});

			if (response.status !== 200) {
				throw new Error(
					`Erro ao buscar vídeos: ${response.statusText}`
				);
			}

			return response.data.items.map((item: any) => ({
				id: item.contentDetails.videoId,
				title: item.snippet.title,
				thumbnail: item.snippet.thumbnails.high.url,
				description: item.snippet.description,
			}));
		} catch (error: any) {
			console.error(
				'Falha ao buscar vídeos pela ID da playlist:',
				error.message || error
			);
			throw error;
		}
	};
}
