import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/actions/authentication_actions';
import { useRouter } from 'next/navigation';
import { USER_ROUTES } from '../../constants/routes';
import { useAuth } from '../../context/AuthContext';

export function useRegisterUser() {
	const router = useRouter();
	const { updateUser } = useAuth();

	return useMutation({
		mutationFn: registerUser,
		onSuccess: (response) => {
			updateUser(response.jwt);
			router.push(USER_ROUTES.PROFILE);
		},
		onError: (error: Error) => {
			throw new Error(error.message);
		},
	});
}
