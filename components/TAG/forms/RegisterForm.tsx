'use client';

import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RegisterFormData, registerFormDefaultValues, registerSchema } from '../../../schemas/authenticationSchema';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { useRegisterUser } from '../../../hooks/authentication/useRegisterUser';

const RegisterForm = () => {
	const [isPending, startTransition] = useTransition();
	const { mutate: register } = useRegisterUser();

	const form = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
		defaultValues: registerFormDefaultValues,
	});

	const handleSubmit = (values: RegisterFormData) => {
		startTransition(() => {
			register(values, {
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
				{/* Confirmar contraseña */}
				<FormField
					name="confirmPassword"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="label-form-input-text">Confirmar contraseña</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder={'******'}
									type="password"
									className={`form-input-text ${
										form.formState.errors.confirmPassword && 'form-input-text-validation-error'
									}`}
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
					Unirme
				</Button>
				{form.formState.errors.root && (
					<FormMessage className="form-response-error">{form.formState.errors.root.message}</FormMessage>
				)}
			</form>
		</Form>
	);
};

export default RegisterForm;
