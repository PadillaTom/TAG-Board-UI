import * as z from 'zod';

export const loginSchema = z.object({
	username: z.string().email({ message: 'El email no es válido.' }),
	password: z.string().min(6, { message: 'Mínimo 6 caracteres' }),
});

export const registerSchema = z
	.object({
		username: z.string().email({ message: 'El email no es válido.' }),
		password: z.string().min(6, { message: 'Mínimo 6 caracteres' }),
		confirmPassword: z.string(),
		roleId: z.number().positive().max(2),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Las contraseñas no coinciden',
		path: ['confirmPassword'],
	});

export const loginFormDefaultValues = {
	username: '',
	password: '',
};

export const registerFormDefaultValues = {
	username: '',
	password: '',
	confirmPassword: '',
	roleId: 2,
};

export type LoginRequest = z.infer<typeof loginSchema>;
export type RegisterRequest = z.infer<typeof registerSchema>;
