'use client';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthenticationContextType, JwtCookieData } from '../types/authentication';
import { COOKIE_NAME } from '../constants/app_constants';

const MyAuthContext = createContext<AuthenticationContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<JwtCookieData>({
		token: null,
		role: null,
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const cookieUser = Cookies.get(COOKIE_NAME);
		if (cookieUser) {
			try {
				const decode: JwtCookieData = jwtDecode(cookieUser as string);
				setUser({ token: decode.token, role: decode.role });
			} catch (error) {
				console.error('Error parsing user cookie:', error);
				setUser({
					token: null,
					role: null,
				});
			}
		}
		setLoading(false);
	}, []);

	// =========================
	//  Functions
	// =========================
	const updateUser = (newUser: string | null) => {
		const decode: JwtCookieData = jwtDecode(newUser as string);
		setUser({ token: newUser, role: decode.role });
		if (newUser) {
			Cookies.set(COOKIE_NAME, newUser, {
				expires: 7,
				secure: false,
			});
		} else {
			Cookies.remove(COOKIE_NAME);
		}
		setLoading(false);
	};

	const logoutUser = () => {
		setUser({
			token: null,
			role: null,
		});
		Cookies.remove(COOKIE_NAME);
		setLoading(false);
	};

	return <MyAuthContext.Provider value={{ user, loading, updateUser, logoutUser }}>{children}</MyAuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(MyAuthContext);
	if (!context) throw new Error('useAuth must be used within AuthProvider');
	return context;
};
