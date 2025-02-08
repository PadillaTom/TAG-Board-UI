// ================================
//  Web App Routes
// ================================

export const WEBSITE_ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	ABOUT: '/about',
	CONTACT: '/contact',
};

export const USER_ROUTES = {
	DASHBOARD: '/dashboard',
	PROFILE: '/dashboard/profile',
};

export const navLinks = {
	guest: [
		{ label: 'Inicio', href: WEBSITE_ROUTES.HOME },
		{ label: 'Acerca de nosotros', href: WEBSITE_ROUTES.ABOUT },
		{ label: 'Contacto', href: WEBSITE_ROUTES.CONTACT },
		{ label: 'Entrar', href: WEBSITE_ROUTES.LOGIN },
	],
	user: [
		{ label: 'Inicio', href: USER_ROUTES.DASHBOARD },
		{ label: 'Mi Perfil', href: USER_ROUTES.PROFILE },
	],
};

// ================================
//  Env Variables
// ================================
