import Link from 'next/link';
import { WEBSITE_ROUTES } from '../../../constants/routes';

const TAGLogo = () => {
	return (
		<Link href={WEBSITE_ROUTES.HOME} className="flex gap-1 items-center">
			<h2 className="text-primary font-bold text-xl">TAG</h2>
			<span className="font-light text-lg">Board</span>
		</Link>
	);
};

export default TAGLogo;
