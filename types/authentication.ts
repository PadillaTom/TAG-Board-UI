export interface LoginRequest {
	username: string;
	password: string;
}

export interface RegisterRequest {
	username: string;
	password: string;
	roleId: number;
}

export interface AuthResponse {
	jwt: string;
}
export interface JwtCookieData {
	role: string | null;
	token: string | null;
}

export interface AuthenticationContextType {
	user: JwtCookieData;
	updateUser: (token: string) => void;
	logout: () => void;
}
