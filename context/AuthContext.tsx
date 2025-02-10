'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import { AuthenticationContextType, JwtCookieData } from '../types/authentication';

// Create the AuthContext with a default value of null
const MyAuthContext = createContext<AuthenticationContextType | null>(null);

// AuthProvider Component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<JwtCookieData>({
		role: null,
		token: null,
	});

	// Function to update user and store JWT in cookies
	const updateUser = (token: string) => {
		setCookie('token', token, { path: '/', maxAge: 60 * 60 * 24 }); // 1-day expiration

		// Decode JWT to extract user role
		const decoded: JwtCookieData = jwtDecode(token);
		setUser({ token, role: decoded.role });
	};

	// Function to clear user and remove JWT from cookies
	const logout = () => {
		deleteCookie('token');
		setUser({ token: null, role: null });
	};

	// Load user from cookies on mount
	useEffect(() => {
		const token = getCookie('token');
		if (token) {
			const decoded: JwtCookieData = jwtDecode(token as string);
			setUser({ token: token as string, role: decoded.role });
		}
	}, []);

	// ✅ Pass `user`, `updateUser`, and `logout` inside the provider
	return <MyAuthContext.Provider value={{ user, updateUser, logout }}>{children}</MyAuthContext.Provider>;
};

// Custom Hook to use Auth Context
export const useAuth = () => {
	const context = useContext(MyAuthContext);
	if (!context) throw new Error('useAuth must be used within AuthProvider');
	return context;
};
