import * as z from 'zod';

export const loginSchema = z.object({
	username: z.string().email({ message: 'El email no es válido.' }),
	password: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
});

export const registerSchema = z
	.object({
		username: z.string().email({ message: 'El email no es válido.' }),
		password: z.string().min(4, { message: 'Mínimo 4 caracteres' }),
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

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
