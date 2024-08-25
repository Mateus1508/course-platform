import useAuthStore from '@/store/authStore';
import axios from 'axios';

const { token } = useAuthStore.getState();
const youtubeApiUrl = 'https://www.googleapis.com/youtube/v3';

const api = axios.create({
	baseURL: youtubeApiUrl,
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export default api;
