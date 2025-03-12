'use client';

import Link from 'next/link';
import { USER_ROUTES } from '../../../constants/routes';
import { Button } from '../../../components/ui/button';
import { useAuth } from '../../../context/AuthContext';

const UserDashboardPage = () => {
	const { logoutUser } = useAuth();
	return (
		<div className="flex flex-col gap-4">
			<Link href={USER_ROUTES.PROFILE}>Mi Perfil</Link>
			<Button onClick={() => logoutUser()}>Salir</Button>
		</div>
	);
};

export default UserDashboardPage;
