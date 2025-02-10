import { navLinks } from '../../../constants/routes';
import { LinkButton } from '../../library/button';
import { Container } from '../../library/structure';
import { TAGLogo } from '../logo';

const Navbar = () => {
	const user = false;
	// Determinar qué links mostrar según el rol
	const links = user ? navLinks.user : navLinks.guest;

	return (
		<nav className="hidden w-full h-[5rem] bg-white fixed top-0 drop-shadow-sm sm:flex flex-row items-center justify-center z-30">
			<Container className="flex items-center justify-between">
				<TAGLogo></TAGLogo>
				{!user && (
					<div className="flex flex-row gap-3">
						{links.slice(1, -1).map(({ label, href }, index) => {
							return (
								<LinkButton key={index} route={href} variant={'link'}>
									{label}
								</LinkButton>
							);
						})}
						{links.slice(-1).map(({ href, label }, index) => {
							return (
								<LinkButton key={index} route={href} variant={'default'}>
									{label}
								</LinkButton>
							);
						})}
					</div>
				)}
			</Container>
		</nav>
	);
};

export default Navbar;
