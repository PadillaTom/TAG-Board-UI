import { ROLE } from '@/constants/app_constants';

export interface AuthResponse {
	jwt: string;
}

export interface JwtCookieData {
	role: typeof ROLE.ADMIN | typeof ROLE.USER | null;
	token: string | null;
}

export interface AuthenticationContextType {
	user: JwtCookieData;
	loading: boolean;
	updateUser: (token: string) => void;
	logoutUser: () => void;
}
