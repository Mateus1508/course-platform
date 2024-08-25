import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { create } from 'zustand';

interface AuthState {
	token: string | null;
	setToken: (token: string | null) => void;
	clearToken: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
	token: getCookie('access_token') || null,
	setToken: (token: string | null) => {
		set({ token });
		if (token) {
			setCookie('access_token', token);
		} else {
			deleteCookie('access_token');
		}
	},
	clearToken: () => {
		set({ token: null });
		deleteCookie('access_token');
	},
}));

export default useAuthStore;
