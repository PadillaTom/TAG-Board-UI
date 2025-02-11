import axios from 'axios';
import Cookies from 'js-cookie';
import { COOKIE_NAME } from '@/constants/app_constants';

const authApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_LOCAL_BASE_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

authApi.interceptors.request.use(
	(config) => {
		const token = Cookies.get(COOKIE_NAME);
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

export default authApi;
