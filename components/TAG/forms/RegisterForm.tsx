'use client';

import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { RegisterFormData, registerFormDefaultValues, registerSchema } from '../../../schemas/authenticationSchema';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

const RegisterForm = () => {
	const [isPending, startTransition] = useTransition();

	const form = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
		defaultValues: registerFormDefaultValues,
	});

	const handleSubmit = (values: RegisterFormData) => {
		startTransition(() => {
			console.log(values);
		});
	};

	return (
		<Form {...form}>
			<form className="w-full" onSubmit={form.handleSubmit(handleSubmit)}>
				{/* Username */}
				<FormField
					name="username"
					control={form.control}
					render={({ field }) => (
						<FormItem>
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
						<FormItem className="mt-5">
							<FormControl>
								<Input
									{...field}
									placeholder={'Password'}
									type="password"
									className={`form-input-text ${
										form.formState.errors.password && 'form-input-text-validation-error text-red-600'
									}`}
									autoComplete="off"
									disabled={isPending}
								></Input>
							</FormControl>
							<FormMessage className="form-message-validation-error" />
						</FormItem>
					)}
				/>
				{/* Buttons */}
				<Button type="submit" className="button-fill mt-5" disabled={isPending}>
					Enviar
				</Button>
				{form.formState.errors.root && (
					<FormMessage className="form-response-error ">{form.formState.errors.root.message}</FormMessage>
				)}
			</form>
		</Form>
	);
};

export default RegisterForm;
