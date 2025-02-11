'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { WEBSITE_ROUTES } from '@/constants/routes';
import { ROLE } from '@/constants/app_constants';
import { ThreeDots } from 'react-loader-spinner';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const [showLoader, setShowLoader] = useState(true);
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && (!user || (user.role !== ROLE.USER && user.role !== ROLE.ADMIN))) {
			console.log('⏩ Protected Route: Redirecting to HOME...');
			router.push(WEBSITE_ROUTES.HOME);
		}
	}, [user, loading, router]);

	// Handle Loading. Mostrar por 0.5s
	useEffect(() => {
		const timer = setTimeout(() => setShowLoader(false), 700);
		return () => clearTimeout(timer);
	}, []);
	if (loading || showLoader) {
		return (
			<div className="flex h-screen w-full items-center justify-center">
				<ThreeDots color="#2e77b8" width="80" visible={true} />
			</div>
		);
	}

	return <>{children}</>;
};

export default ProtectedRoute;
