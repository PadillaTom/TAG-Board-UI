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
	token: string;
}
