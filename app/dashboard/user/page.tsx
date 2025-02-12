import Link from 'next/link';
import { USER_ROUTES } from '../../../constants/routes';
import { Button } from '../../../components/ui/button';

const UserDashboardPage = () => {
	return (
		<div className="flex flex-col gap-4">
			<Link href={USER_ROUTES.PROFILE}>Mi Perfil</Link>
			<Button>Salir</Button>
		</div>
	);
};

export default UserDashboardPage;
