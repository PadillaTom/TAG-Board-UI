'use client';

import React, { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginFormData, loginFormDefaultValues, loginSchema } from '../../../schemas/authenticationSchema';
import { useLoginUser } from '../../../hooks/authentication/useLoginUser';
import { Button } from '../../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '../../ui/input';

const LoginForm = () => {
	const [isPending, startTransition] = useTransition();
	const { mutate: login } = useLoginUser();

	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: loginFormDefaultValues,
	});

	const handleSubmit = (values: LoginFormData) => {
		startTransition(() => {
			login(values, {
				onError: (error) => {
					form.setError('root', {
						type: 'manual',
						message: error.message,
					});
				},
			});
		});
	};

	return (
		<Form {...form}>
			<form className="forms-max-width flex flex-col gap-2" onSubmit={form.handleSubmit(handleSubmit)}>
				{/* Username */}
				<FormField
					name="username"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="label-form-input-text">Email</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder={'Email'}
									type="email"
									className={`form-input-text ${form.formState.errors.username && 'form-input-text-validation-error'}`}
									autoComplete="off"
									disabled={isPending}
								></Input>
							</FormControl>
							<FormMessage className="form-message-validation-error" />
						</FormItem>
					)}
				/>
				{/* Password */}
				<FormField
					name="password"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="label-form-input-text">Contraseña</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder={'******'}
									type="password"
									className={`form-input-text ${form.formState.errors.password && 'form-input-text-validation-error'}`}
									autoComplete="off"
									disabled={isPending}
								></Input>
							</FormControl>
							<FormMessage className="form-message-validation-error" />
						</FormItem>
					)}
				/>
				{/* Submit Button */}
				<Button type="submit" className="button-fill mt-5" disabled={isPending}>
					Iniciar Sesión
				</Button>
				{form.formState.errors.root && (
					<FormMessage className="form-response-error">{form.formState.errors.root.message}</FormMessage>
				)}
			</form>
		</Form>
	);
};

export default LoginForm;
