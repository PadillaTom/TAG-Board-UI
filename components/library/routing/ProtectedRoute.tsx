'use client';

import React, { ReactNode, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { WEBSITE_ROUTES } from '@/constants/routes';
import { ROLE } from '@/constants/app_constants';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && (!user || (user.role !== ROLE.USER && user.role !== ROLE.ADMIN))) {
			console.log('⏩ Protected Route: Redirecting to HOME...');
			router.push(WEBSITE_ROUTES.HOME);
		}
	}, [user, loading, router]);

	if (loading) {
		return <h2>Loading...</h2>; // TODO: Replace with a proper loading component
	}

	return <>{children}</>;
};

export default ProtectedRoute;
