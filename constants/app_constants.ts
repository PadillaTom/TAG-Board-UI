// ================================
//  API Constants
// ================================
export const BASE_API = '/api/v1';
export const LOGIN_URL = BASE_API + '/auth/login';
export const REGISTER_URL = BASE_API + '/auth/register';

// ================================
//  App Constants
// ================================
export const COOKIE_NAME = 'TAGBoard-jwt';
export const ROLE = {
	USER: 'ROLE_USER',
	ADMIN: 'ROLE_ADMIN',
};

// ==================================
// Textos
// ==================================
export const SERVER_ERROR = 'Error de red o problema inesperado. Vuelva a intentar mas tarde.';
export const LOGIN_ERROR_MSG = 'Error al iniciar sesión. Verifica tus credenciales.';
